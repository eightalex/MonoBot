import {REGEX_NEW_LINE, REGEX_COMMAND} from '../constants/Regex';
import {DELIMITER_WORD} from '../constants/Delimiter';

export default class StringHandler {

    /**
     * @param {string} str
     * @return {string}
     */
    removeNewLine(str) {
        return str.replace(REGEX_NEW_LINE, DELIMITER_WORD);
    }

    /**
     * @param {string} str
     * @return {string}
     */
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     * Returns command like '/start'
     * @param {string} str
     * @return {string}
     */
    getCommand(str) {
        return REGEX_COMMAND.exec(str).shift();
    }

}