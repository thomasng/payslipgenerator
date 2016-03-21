/**
 * Created by Thomas.Ng on 18/03/2016.
 */

"use strict";

// The following income tax rate information may stored in database in the future. For this exercise, we just hard-coded in here
// Tax rate are based on ATO information
// https://www.ato.gov.au/Rates/Individual-income-tax-for-prior-years/

// Income Tax Rate from 2009 to 2009
var taxRateFrom2009 = [
    {from : 0, to : 6000, basedTax : 0, taxRate : 0 },
    {from : 6001, to : 35000, basedTax : 0, taxRate : 0.15 },
    {from : 35001, to : 80000, basedTax : 4350, taxRate : 0.3 },
    {from : 80001, to : 180000, basedTax : 17850, taxRate : 0.38 },
    {from : 180001, to : Number.MAX_VALUE, basedTax : 55850, taxRate : 0.45 }
];

// Income Tax Rate from 2010 to 2011
var taxRateFrom2010 = [
    {from : 0, to : 6000, basedTax : 0, taxRate : 0 },
    {from : 6001, to : 37000, basedTax : 0, taxRate : 0.15 },
    {from : 37001, to : 80000, basedTax : 4650, taxRate : 0.3 },
    {from : 80001, to : 180000, basedTax : 17550, taxRate : 0.37 },
    {from : 180001, to : Number.MAX_VALUE, basedTax : 54550, taxRate : 0.45 }
];

// Income Tax Rate from 2012 to Now
var taxRateFrom2012 = [
    {from : 0, to : 18200, basedTax : 0, taxRate : 0 },
    {from : 18201, to : 37000, basedTax : 0, taxRate : 0.19 },
    {from : 37001, to : 80000, basedTax : 3572, taxRate : 0.325 },
    {from : 80001, to : 180000, basedTax : 17547, taxRate : 0.37 },
    {from : 180001, to : Number.MAX_VALUE, basedTax : 54547, taxRate : 0.45 }
];


var incomeTaxRates = [
    {key: 2009, value: taxRateFrom2009},
    {key: 2010, value: taxRateFrom2010},
    {key: 2011, value: taxRateFrom2010},
    {key: 2012, value: taxRateFrom2012},
    {key: 2013, value: taxRateFrom2012},
    {key: 2014, value: taxRateFrom2012},
    {key: 2015, value: taxRateFrom2012},
]


/*
 Private functions
 */

/**
 * find the income tax rates information of given financial year
 */
function _findIncomeTaxRates(year)
{

    for(var i = 0; i < incomeTaxRates.length; i++) {
        var taxRateInfo = incomeTaxRates[i];
        if (taxRateInfo.key == year)
            return taxRateInfo.value;
    }

    // for any future year, we assume it is no change from 2012
    if (year > 2015)
        return _findIncomeTaxRates(2015);

    throw 'tax year is not supported yet';
}


/**
 *  check if given financial year supported
 */
function _isYearSupported(year)
{
    try {
        _findIncomeTaxRates(year);
    } catch (err) {
        return false;
    }
    return true;
}

/**
 * find the income tax bracket of the annual salary in given financial year
 */
function _findIncomeTaxRateBracket(annualSalary, taxRates)
{
    for(var i = 0; i < taxRates.length; i++) {
        var bracket = taxRates[i];
        if (annualSalary >= bracket.from &&  annualSalary <= bracket.to)
              return bracket;
    }

    throw 'income tax bracket is not found';
}

/**
 * calculate annual income tax of the annual salary in given financial year based on rounding or not
 */
function _calculateAnnualTax(annualSalary, year, isRounding)
{
    if (annualSalary <= 0)
        return 0;

    var taxRates = _findIncomeTaxRates(year);
    var roundedAnnualSalary = Math.round(annualSalary);
    var taxRateBracket = _findIncomeTaxRateBracket(roundedAnnualSalary, taxRates);

    // amount that need to be applied for this bracket tax rate
    var unTaxedAmount = (roundedAnnualSalary - taxRateBracket.from + 1);
    var annualIncomeTax =  taxRateBracket.basedTax +  unTaxedAmount* taxRateBracket.taxRate;
    return isRounding  ? Math.round(annualIncomeTax) : annualIncomeTax;
}

/**
 * calculate monthly income tax of the annual salary in given financial year based on rounding or not
 */
function _calculateMonthlyTax(annualSalary, year, isRounding)
{
    var monthlyIncomeTax = _calculateAnnualTax(annualSalary, year, false)/12;

    return isRounding  ? Math.round(monthlyIncomeTax) : monthlyIncomeTax;
}


/*
 Income tax calculator
 */
var incomeTaxCalculator = {
        calculateMonthlyTax : _calculateMonthlyTax,
        calculateAnnualTax : _calculateAnnualTax,
        isYearSupported : _isYearSupported
};

/**
 * Expose `incomeTaxCalculator`.
 */
module.exports = incomeTaxCalculator;