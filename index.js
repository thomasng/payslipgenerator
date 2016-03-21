/**
 * Created by Thomas.Ng on 18/03/2016.
 */

"use strict";


// Call this via CLI with $ node app.js /PathTo/Your.csv
var parse = require('csv-parse');
var fs = require('fs');
var csvWriter = require('csv-write-stream');
var payslipGenerator = require('./business_logic/payslipGenerator');
var inputCsvRowValidator = require('./validation/inputCsvRowValidator');


/*
 variables
*/
var _outputCsv = csvWriter({ headers: ["name", "pay period", "gross income", "icome tax", "net income", "super", "error"]});
var _financialYear = 0;
var _outputCsvFilePath = '';


// Start the program
_start();


/*
 Private functions
 */


/**
  * start the program to take thee input Ssalary csv file and generate the payslip
  *  2012 ./input_files/salary2012.csv
 */

function _start()
{
    console.time("ExecutedTime");

    /*
     Position 0 == node,  poistion 1 == app.js (full path) thats why we check we
     position 2 = year,  position 3 = inputCsvFile, position 4 = outputCsvFile
     need to check for args from index 2 onwards
     */
    if (process.argv.length == 5)
    {
        _financialYear = Number(process.argv[2]);
        if (!payslipGenerator.isYearSupported(_financialYear))
        {
            console.error('Finalcial Year ' + _financialYear + ' is not supported');
            return;
        }

        var inputCsvFilePath = process.argv[3]; // Get input csv file
        _outputCsvFilePath = process.argv[4]; // Get input csv file

        fs.readFile(inputCsvFilePath, function (err, data) { // Read the contents of the file
            if (err){
                console.error( "** ERROR ** ", err);
            } else{
                // Finally parse the data and set first line as column names
                parse(data.toString(),  {comment: '#', columns: true, skip_empty_lines: true}, _processCsvInputData);
            }
        });
    }
    else
    {
        var commandLineError = 'Invalid command line :  node index.js [year] [inputCsvFile] [outputCsvFile]\n';
        commandLineError +=  'e.g. node index.js 2012  ./input_files/salary2012.csv ./output_files/result2012.csv';

        console.log(commandLineError);
    }
}


/**
 * process Csv input data
 */
function _processCsvInputData( err, data){
    if(err)
        console.error( "** ERROR ** ", err);
    else
    {
        // output csv file
        _outputCsv.pipe(fs.createWriteStream(_outputCsvFilePath));

        for(var i = 0; i < data.length;i++) {
            var csvRow = data[i];
            if (!_validateCsvRow(csvRow))
             continue;

            payslipGenerator.generatePayslip(_financialYear, new salaryInfo(csvRow), _outputPayslip);
        }

        _outputCsv.end();
        console.log('payslips are generated  : ' + _outputCsvFilePath);
        console.timeEnd("ExecutedTime");
    }
}

/**
 *  validate csv input row
 */
function _validateCsvRow(csvRow)
{

    try {
        inputCsvRowValidator.validate(csvRow);
    } catch (err) {
        err.message = 'Employee - ' + csvRow.firstName + ' ' + csvRow.lastName + ' Error - ' + err.message;
        _outputPayslip(err, null);
        return false;
    }

    return true;
}


/**
 * convert csvRow to salary info object function
 */
function salaryInfo(csvRow){
    // always initialize all instance properties
    this.firstName = csvRow.firstName;
    this.lastName = csvRow.lastName;
    this.annualSalary = Number(csvRow.annualSalary);
    this.superRate = _precentageTextToNumber(csvRow.superRate);
    this.payPeriod = csvRow.paymentStartDate;
}


/**
 *  convert a precentage text (25.3%) to a number e.g.0.253
 */
function _precentageTextToNumber(precentageText) {

    return parseFloat(precentageText) / 100.0;
}


/**
 *  output payslip object to console
 */
function _outputPayslip(err, payslip ){

    if(err) {
        console.error("** ERROR ** ", err);
        // write a line to CSV file
        _outputCsv.write(['', '', '', '', '', '', err.message]);
    }
    else {
        console.log(payslip);

        // write a line to CSV file
        _outputCsv.write([payslip.DisplayName, payslip.payPeriod, payslip.grossIncome, payslip.incomeTax, payslip.netIncome, payslip.superAmount, '']);
    }
}