/**
 * Created by Thomas.Ng on 18/03/2016.
 */

"use strict";

var incomeTaxCalculator = require('./incomeTaxCalculator')
var superCalculator = require('./superCalculator')
var salaryInfoValidator = require('./../validation/salaryInfoValidator');



/**
 * payslip result function
 */
function payslip(firstName, lastName, payPeriod, grossIncome, incomeTax, netIncome, superAmount){
    // always initialize all instance properties
    this.firstName = firstName;
    this.lastName = lastName;

    this.payPeriod = payPeriod;
    this.grossIncome = grossIncome;
    this.incomeTax = incomeTax;
    this.netIncome = netIncome;
    this.superAmount = superAmount;

    this.DisplayName = firstName + ' ' + lastName;
}

/**
 * generate payslip information for an employee
 */
function _generatePayslip(year, salaryInfo, callback)
{
    // validate salary Info
    if (!_validate(salaryInfo, callback))
        return;

    // do  payslip calculation
    var incomeTax = incomeTaxCalculator.calculateMonthlyTax(salaryInfo.annualSalary, year, true);

    var roundedAnnualSalary = Math.round(salaryInfo.annualSalary);
    var grossIncome =  Math.round(roundedAnnualSalary/12);
    var netIncome = grossIncome - incomeTax;
    var superAmount = superCalculator.calculate(grossIncome, salaryInfo.superRate);

    var payslipItem = new payslip(salaryInfo.firstName, salaryInfo.lastName, salaryInfo.payPeriod, grossIncome, incomeTax, netIncome, superAmount);
    if (callback != null)
        callback(null, payslipItem);
}



function _validate(salaryInfo, callback)
{

    try {
        salaryInfoValidator.validate(salaryInfo);
    } catch (err) {
        if (callback != null) {
            err.message = 'Employee - ' + salaryInfo.DisplayName + ' Error - ' + err.message;
            callback(err, null);
        }
        return false;
    }

    return true;
}

/**
 *  check if given financial year supported
 */
function _isYearSupported(year)
{
    return incomeTaxCalculator.isYearSupported(year);
}



/*
 Payslip Generator
 */
var payslipGenerator = {
    generatePayslip : _generatePayslip,
    isYearSupported : _isYearSupported
};

/**
 * Expose `payslipGenerator`.
 */
module.exports = payslipGenerator;