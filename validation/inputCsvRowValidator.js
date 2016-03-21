/**
 * Created by Thomas.Ng on 21/03/2016.
 */


"use strict";

var validator = require('validator');


/*
 Private functions
 */

/**
 *  validate csv input Row object
 */
function _validate(csvRow)
{
    if (!_validateText(csvRow.firstName))
        throw new Error('firstName is required');

    if (!_validateText(csvRow.lastName))
        throw new Error('lastName is required');

    if (!_validateText(csvRow.paymentStartDate))
        throw new Error('paymentStartDate is required');

    if (!_validateNumber(csvRow.annualSalary))
        throw new Error('annualSalary is required and must be a number');

    if (!_validateSuperRateFormat(csvRow.superRate))
        throw new Error('superRate is required and must be have format like 9.5%');

}

function _validateText(text)
{
    if (text == undefined || validator.isNull(text))
        return false;

    return true;
}

function _validateNumber(number)
{
    if (number == undefined || isNaN(number))
        return false;

    return true;
}


/*
 *  The superRate in csv would be something like '9%'
 */
function _validateSuperRateFormat(rateText)
{
    if (rateText == undefined)
        return false;

    if (!rateText.endsWith('%'))
        return false;

    var numberWithoutPrecentage = rateText.substr(0, rateText.length -1);

    return !isNaN(numberWithoutPrecentage);
}

/*
 input Csv Row Validator
 */
var inputCsvRowValidator = {
    validate : _validate
};

/**
 * Expose inputCsvRowValidator.
 */
module.exports = inputCsvRowValidator;

