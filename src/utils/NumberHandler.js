import {REGEX_COMMAS, REGEX_DIGITS_IN_BRACES} from '../constants/Regex';

export default class NumberHandler {

    /**
     * @param {number} value
     * @returns {boolean}
     */
    isFinite(value) {
        if (typeof value !== 'number') {
            return false;
        }

        if (value !== value || value === Infinity || value === -Infinity) {
            return false;
        }

        return true;
    };

    /**
     * @param {number} number
     * @return {number}
     */
    makePositive(number) {
        return Math.abs(number);
    }

    /**
     * @param {number} number
     * @return {number}
     */
    makeNegative(number) {
        return number - (number * 2);
    }

    /**
     * @param {number} amount
     * @return {number}
     */
    prepareMonoAmount(amount) {
        return Math.ceil(amount / 100);
    }

    /**
     * @param {number} amount
     * @return {number}
     */
    prepareMonoBalance(amount) {
        return amount / 100;
    }

}