/**
 * Created by Thomas.Ng on 20/03/2016.
 */

var assert = require('assert');
var payslipGenerator = require('./../business_logic/payslipGenerator');

function salaryInfo(firstName, lastName, annualSalary, superRate, payPeriod){
    // always initialize all instance properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.annualSalary = annualSalary;
    this.superRate = superRate;
    this.payPeriod = payPeriod;
}

/**
 * Tests for  generatePayslip
 */

describe('Calculate payslip for employee A in 2012 unit tests', function () {

    var annualSalary = 60050;
    var year = 2012;

    var salaryItem = new salaryInfo('David', 'Rudd', 60050, 0.09, '01 March - 31 March');

    it('should return expected payslip', function () {
        payslipGenerator.generatePayslip(2012, salaryItem,
        function(error, result)
        {
            assert.equal(error, null);

            assert.equal(result.firstName, 'David');
            assert.equal(result.lastName, 'Rudd');
            assert.equal(result.payPeriod, '01 March - 31 March');
            assert.equal(result.grossIncome, 5004);
            assert.equal(result.incomeTax, 922);
            assert.equal(result.netIncome, 4082);
            assert.equal(result.superAmount, 450);
        }
        );

    });
});


describe('Calculate payslip for employee A in 2012 with validation error unit tests', function () {

    var annualSalary = 60050;
    var year = 2012;

    var salaryItem = new salaryInfo('', 'Rudd', 60050, 0.09, '01 March - 31 March');

    it('should return expected payslip', function () {
        payslipGenerator.generatePayslip(2012, salaryItem,
            function(error, result)
            {
                assert.equal(result, null);

                assert.equal(error.message, 'Employee - undefined Error - firstName is required');
            }
        );

    });
});
