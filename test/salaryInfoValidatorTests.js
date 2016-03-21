/**
 * Created by Thomas.Ng on 21/03/2016.
 */


/**
 * Tests for salaryInfoValidator
 */

var assert = require('assert');
var salaryInfoValidator = require('./../validation/salaryInfoValidator');

function salaryInfo(firstName, lastName, annualSalary, superRate, payPeriod){
    // always initialize all instance properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.annualSalary = annualSalary;
    this.superRate = superRate;
    this.payPeriod = payPeriod;
}


/**
 * Tests for sucess case
 */
describe('Validate salaryInfo successfuly unit tests', function () {

    var testSalaryInfo = new salaryInfo('John', 'Smith', 1000.3, 0.5, '1 March - 31 March');

    it('should be valid ', function () {
        salaryInfoValidator.validate(testSalaryInfo);

    });
});


/**
 * Tests for validating firstName
 */

describe('Validate salaryInfo with empty firstName unit tests', function () {

    var testSalaryInfo = new salaryInfo('', 'Smith', 1000.3, 0.5, '1 March - 31 March');
    var expectedExceptionMessage = 'firstName is required';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            salaryInfoValidator.validate(testSalaryInfo);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});


describe('Validate salaryInfo with undefined firstName unit tests', function () {

    var testSalaryInfo = new salaryInfo(undefined, 'Smith', 1000.3, 0.5, '1 March - 31 March');
    var expectedExceptionMessage = 'firstName is required';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            salaryInfoValidator.validate(testSalaryInfo);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});

/**
 * Tests for validating lastName
 */

describe('Validate salaryInfo with empty lastName unit tests', function () {

    var testSalaryInfo = new salaryInfo('John', '', 1000.3, 0.5, '1 March - 31 March');
    var expectedExceptionMessage = 'lastName is required';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            salaryInfoValidator.validate(testSalaryInfo);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});


describe('Validate salaryInfo with undefined lastName unit tests', function () {

    var testSalaryInfo = new salaryInfo('John', undefined, 1000.3, 0.5, '1 March - 31 March');
    var expectedExceptionMessage = 'lastName is required';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            salaryInfoValidator.validate(testSalaryInfo);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});

/**
 * Tests for validating payPeriod
 */

describe('Validate salaryInfo with empty payPeriod unit tests', function () {

    var testSalaryInfo = new salaryInfo('John', 'Smith', 1000.3, 0.5, '');
    var expectedExceptionMessage = 'payPeriod is required';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            salaryInfoValidator.validate(testSalaryInfo);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});


describe('Validate salaryInfo with undefined payPeriod unit tests', function () {

    var testSalaryInfo = new salaryInfo('John', 'Smith', 1000.3, 0.5, undefined);
    var expectedExceptionMessage = 'payPeriod is required';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            salaryInfoValidator.validate(testSalaryInfo);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});

/**
 * Tests for validating annualSalary
 */

describe('Validate salaryInfo with undefined annualSalary unit tests', function () {

    var testSalaryInfo = new salaryInfo('John', 'Smith', undefined, 0.5, '1 March - 31 March');
    var expectedExceptionMessage = 'annualSalary must be a number';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            salaryInfoValidator.validate(testSalaryInfo);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});


describe('Validate salaryInfo with non numeric annualSalary unit tests', function () {

    var testSalaryInfo = new salaryInfo('John', 'Smith', 'Not a number', 0.5, '1 March - 31 March');
    var expectedExceptionMessage = 'annualSalary must be a number';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            salaryInfoValidator.validate(testSalaryInfo);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});


/**
 * Tests for validating superRate
 */

describe('Validate salaryInfo with undefined superRate unit tests', function () {

    var testSalaryInfo = new salaryInfo('John', 'Smith', 1000, undefined, '1 March - 31 March');
    var expectedExceptionMessage = 'superRate must be a number';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            salaryInfoValidator.validate(testSalaryInfo);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});


describe('Validate salaryInfo with non numeric superRate unit tests', function () {

    var testSalaryInfo = new salaryInfo('John', 'Smith', 1000, 'Not a number', '1 March - 31 March');
    var expectedExceptionMessage = 'superRate must be a number';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            salaryInfoValidator.validate(testSalaryInfo);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});