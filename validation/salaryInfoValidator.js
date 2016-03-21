/**
 * Created by Thomas.Ng on 21/03/2016.
 */


"use strict";

var validator = require('validator');


/*
 Private functions
 */

/**
 *  validate salary info object
 */
function _validate(salaryInfo)
{
    if (!_validateText(salaryInfo.firstName))
      throw new Error('firstName is required');

    if (!_validateText(salaryInfo.lastName))
        throw new Error('lastName is required');

    if (!_validateText(salaryInfo.payPeriod))
        throw new Error('payPeriod is required');

    if (!_validateNumber(salaryInfo.annualSalary))
        throw new Error('annualSalary must be a number');

    if (!_validateNumber(salaryInfo.superRate))
        throw new Error('superRate must be a number');

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
 salaryInfo Validator
 */
var salaryInfoValidator = {
    validate : _validate
};

/**
 * Expose `salaryInfoValidator`.
 */
module.exports = salaryInfoValidator;
