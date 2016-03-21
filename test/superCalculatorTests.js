/**
 * Created by Thomas.Ng on 18/03/2016.
 */

/**
 * Tests for superCalculator
 */

var assert = require('assert');
var superCalculator = require('./../business_logic/superCalculator');

describe('Calculate super amount unit tests', function () {

    var grossIncome = 5004;
    var superRate = 9/100;
    var expectedResult = 450;

    it('should return ' + expectedResult, function () {
        assert.equal(superCalculator.calculate(grossIncome, superRate), expectedResult);
    });
});


describe('Calculate super amount with non-whole-integer super rate unit tests', function () {

    var grossIncome = 5004;
    var superRate = 9.2/100;
    var expectedResult = 460;    // round(5004*9.2%)

    it('should return ' + expectedResult, function () {
        assert.equal(superCalculator.calculate(grossIncome, superRate), expectedResult);
    });
});


describe('Calculate super amount with non-whole-integer net income unit tests', function () {

    var grossIncome = 5034.7;
    var superRate = 42/100;
    var expectedResult = 2115;  // round(5034.7*42%) -> round(5035*42%)

    it('should return ' + expectedResult, function () {
        assert.equal(superCalculator.calculate(grossIncome, superRate), expectedResult);
    });
});

describe('Calculate super amount with negative net income unit tests', function () {

    var grossIncome = -100;
    var superRate = 10/100;
    var expectedResult = 0;

    it('should return ' + expectedResult, function () {
        assert.equal(superCalculator.calculate(grossIncome, superRate), expectedResult);
    });
});

