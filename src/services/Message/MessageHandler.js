import {DELIMITER_WORD, DELIMITER_DASH, DELIMITER_LINE} from '../../constants/Delimiter';

export default class MessageHandler {

    /**
     * @param {StringHandler} stringHandler
     */
    constructor(stringHandler) {
        this.stringHandler = stringHandler;
    }

    /**
     * @param {string} comment
     * @param {number} value
     * @param {number} balance
     * @return {string}
     */
    prepareComment(comment, value, balance) {
        if (!comment) {
            return 'Error of prepare comment';
        }

        comment = comment.trim();
        comment = this.stringHandler.removeNewLine(comment);
        comment = this.stringHandler.capitalize(comment);
        comment = this.extendCommentForTelegramMessage(comment, value, balance);

        return comment;
    }

    /**
     * @param {string} comment
     * @param {number} value
     * @param {number} balance
     * @return {string}
     */
    extendCommentForTelegramMessage(comment, value, balance) {
        return comment
            + DELIMITER_WORD
            + DELIMITER_DASH
            + DELIMITER_WORD
            + value
            + DELIMITER_WORD
            + process.env.CURRENCY_ACRONYM
            + DELIMITER_LINE
            + 'Залишилось'
            + DELIMITER_WORD
            + balance
            + DELIMITER_WORD
            + process.env.CURRENCY_ACRONYM;
    }

}