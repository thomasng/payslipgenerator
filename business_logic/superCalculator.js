/**
 * Created by Thomas.Ng on 18/03/2016.
 */

"use strict";

/*
 Private functions
 */

/**
 * calculate super amount of net income based on given super rate
 */
function _calculate(grossIncome, superRate)
{
    var roundedGrossIncome = Math.round(grossIncome)
    if (roundedGrossIncome <= 0)
        return 0;
    return Math.round(roundedGrossIncome * superRate);
}


/*
   Superannuation calculator
 */
var superCalculator = {
    calculate : _calculate
};

/**
 * Expose `superCalculator`.
 */
module.exports = superCalculator;