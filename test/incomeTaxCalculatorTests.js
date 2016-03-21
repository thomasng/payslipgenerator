/**
 * Created by Thomas.Ng on 18/03/2016.
 */

/**
 * Tests for incomeTaxCalculator
 */

var assert = require('assert');
var incomeTaxCalculator = require('./../business_logic/incomeTaxCalculator');

/**
 * Tests for  calculateMonthlyTax
 */

describe('Calculate rounded monthly income tax for employee A in 2012 unit tests', function () {

    var annualSalary = 60050;
    var year = 2012;
    var expectedResult = 922;

    it('should return ' + expectedResult, function () {
        assert.equal(incomeTaxCalculator.calculateMonthlyTax(annualSalary, year, true), expectedResult);
    });
});

describe('Calculate unrounded monthly income tax in 2012 unit tests', function () {

    var annualSalary = 60050;
    var year = 2012;
    var expectedResult = 921.9375;

    it('should return ' + expectedResult, function () {
        assert.equal(incomeTaxCalculator.calculateMonthlyTax(annualSalary, year, false), expectedResult);
    });
});


describe('Calculate rounded monthly income tax for zero salary in 2012 unit tests', function () {

    var annualSalary = 0;
    var year = 2012;
    var expectedResult = 0;

    it('should return ' + expectedResult, function () {
        assert.equal(incomeTaxCalculator.calculateMonthlyTax(annualSalary, year, true), expectedResult);
    });
});

describe('Calculate rounded monthly income tax for negative salary in 2012 unit tests', function () {

    var annualSalary = -100;
    var year = 2012;
    var expectedResult = 0;

    it('should return ' + expectedResult, function () {
        assert.equal(incomeTaxCalculator.calculateMonthlyTax(annualSalary, year, true), expectedResult);
    });
});




describe('Calculate rounded monthly income tax for employee B in 2012 unit tests', function () {

    var annualSalary = 120000;
    var year = 2012;
    var expectedResult = 2696;

    it('should return ' + expectedResult, function () {
        assert.equal(incomeTaxCalculator.calculateMonthlyTax(annualSalary, year, true), expectedResult);
    });
});


describe('Calculate rounded monthly income tax for highest bracket in 2012 unit tests', function () {

    var annualSalary = 200000;
    var year = 2012;
    var expectedResult = 5296;

    it('should return ' + expectedResult, function () {
        assert.equal(incomeTaxCalculator.calculateMonthlyTax(annualSalary, year, true), expectedResult);
    });
});

describe('Calculate rounded monthly income tax for lowest bracket for 2013 unit tests', function () {

    var annualSalary = 18200;
    var year = 2013;
    var expectedResult = 0;

    it('should return ' + expectedResult, function () {
        assert.equal(incomeTaxCalculator.calculateMonthlyTax(annualSalary, year, true), expectedResult);
    });
});


describe('Calculate rounded monthly income tax for 2011 unit tests', function () {

    var annualSalary = 8000;
    var year = 2011;

    // In 2011, thresold is $6000, tax bracket $6001 - $3700 is 0.15
    var expectedResult = 25;

    it('should return ' + expectedResult, function () {
        assert.equal(incomeTaxCalculator.calculateMonthlyTax(annualSalary, year, true), expectedResult);
    });
});


/**
 * Tests for  calculateAnnualTax
 */

describe('Calculate unrounded annual income tax for employee A unit tests', function () {

    var annualSalary = 60050;
    var year = 2012;
    var expectedResult = 11063.25;

    it('should return ' + expectedResult, function () {
        assert.equal(incomeTaxCalculator.calculateAnnualTax(annualSalary, year, false), expectedResult);
    });
});


describe('Calculate rounded annual income tax for employee A unit tests', function () {

    var annualSalary = 60050;
    var year = 2012;
    var expectedResult = 11063;

    it('should return ' + expectedResult, function () {
        assert.equal(incomeTaxCalculator.calculateAnnualTax(annualSalary, year, true), expectedResult);
    });
});

