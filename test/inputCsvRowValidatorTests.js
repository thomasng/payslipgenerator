/**
 * Created by Thomas.Ng on 21/03/2016.
 */


/**
 * Tests for csvInputRowValidator
 */

var assert = require('assert');
var inputCsvRowValidator = require('./../validation/inputCsvRowValidator');

function csvInputRow(firstName, lastName, annualSalary, superRate, paymentStartDate){
    // always initialize all instance properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.annualSalary = annualSalary;
    this.superRate = superRate;
    this.paymentStartDate = paymentStartDate;
}


/**
 * Tests for sucess case
 */
describe('Validate csvInputRow successfuly unit tests', function () {

    var testcsvInputRow = new csvInputRow('John', 'Smith', '1000.3', '0.5%', '1 March - 31 March');

    it('should be valid ', function () {
        inputCsvRowValidator.validate(testcsvInputRow);

    });
});


/**
 * Tests for validating firstName
 */

describe('Validate csvInputRow with empty firstName unit tests', function () {

    var testcsvInputRow = new csvInputRow('', 'Smith', 1000.3, '0.5%', '1 March - 31 March');
    var expectedExceptionMessage = 'firstName is required';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            inputCsvRowValidator.validate(testcsvInputRow);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});


describe('Validate csvInputRow with undefined firstName unit tests', function () {

    var testcsvInputRow = new csvInputRow(undefined, 'Smith', 1000.3, '0.5%', '1 March - 31 March');
    var expectedExceptionMessage = 'firstName is required';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            inputCsvRowValidator.validate(testcsvInputRow);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});

/**
 * Tests for validating lastName
 */

describe('Validate csvInputRow with empty lastName unit tests', function () {

    var testcsvInputRow = new csvInputRow('John', '', 1000.3, '0.5%', '1 March - 31 March');
    var expectedExceptionMessage = 'lastName is required';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            inputCsvRowValidator.validate(testcsvInputRow);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});


describe('Validate csvInputRow with undefined lastName unit tests', function () {

    var testcsvInputRow = new csvInputRow('John', undefined, 1000.3, '0.5%', '1 March - 31 March');
    var expectedExceptionMessage = 'lastName is required';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            inputCsvRowValidator.validate(testcsvInputRow);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});

/**
 * Tests for validating paymentStartDate
 */

describe('Validate csvInputRow with empty paymentStartDate unit tests', function () {

    var testcsvInputRow = new csvInputRow('John', 'Smith', 1000.3, '0.5%', '');
    var expectedExceptionMessage = 'paymentStartDate is required';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            inputCsvRowValidator.validate(testcsvInputRow);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});


describe('Validate csvInputRow with undefined paymentStartDate unit tests', function () {

    var testcsvInputRow = new csvInputRow('John', 'Smith', 1000.3, '0.5%', undefined);
    var expectedExceptionMessage = 'paymentStartDate is required';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            inputCsvRowValidator.validate(testcsvInputRow);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});

/**
 * Tests for validating annualSalary
 */

describe('Validate csvInputRow with undefined annualSalary unit tests', function () {

    var testcsvInputRow = new csvInputRow('John', 'Smith', undefined, '0.5%', '1 March - 31 March');
    var expectedExceptionMessage = 'annualSalary is required and must be a number';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            inputCsvRowValidator.validate(testcsvInputRow);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});


describe('Validate csvInputRow with non numeeric annualSalary unit tests', function () {

    var testcsvInputRow = new csvInputRow('John', 'Smith', 'Not a number', '0.5%', '1 March - 31 March');
    var expectedExceptionMessage = 'annualSalary is required and must be a number';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            inputCsvRowValidator.validate(testcsvInputRow);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});


/**
 * Tests for validating superRate
 */

describe('Validate csvInputRow with undefined superRate unit tests', function () {

    var testcsvInputRow = new csvInputRow('John', 'Smith', 1000, undefined, '1 March - 31 March');
    var expectedExceptionMessage = 'superRate is required and must be have format like 9.5%';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            inputCsvRowValidator.validate(testcsvInputRow);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});


describe('Validate csvInputRow with non numeric superRate unit tests', function () {

    var testcsvInputRow = new csvInputRow('John', 'Smith', 1000, 'Not a number', '1 March - 31 March');
    var expectedExceptionMessage = 'superRate is required and must be have format like 9.5%';

    it('should has exception message ' + expectedExceptionMessage, function () {
        try {
            inputCsvRowValidator.validate(testcsvInputRow);
        } catch (err) {

            assert.equal(err.message, expectedExceptionMessage);
        }
    });
});
