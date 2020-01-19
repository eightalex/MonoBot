import {DELIMITER_WORD, DELIMITER_SENTENCE} from '../../constants/Delimiter';
import messages from '../../data/Messages';

export default class MessageGenerator {

    /**
     * @param {string} type
     * @param {object} options
     * @return {string}
     */
    getMessage(type, options = {}) {
        switch (type) {
            case 'start':
                return this.getStartMessage(options);
            case 'balance':
                return this.getBalanceMessage();
            case 'commandException':
                return this.getCommandException();
            default:
                throw new TypeError('Unresolved message type');
        }
    }

    /**
     * @param {number} length
     * @return {number}
     */
    getRandomIndex(length) {
        return Math.random() * (length - 1) | 0;
    }

    /**
     * @param {array} messages
     * @return {string}
     */
    getRandomMessage(messages) {
        return messages[
            this.getRandomIndex(messages.length)
        ];
    }

    /**
     * @return {string}
     */
    getChadIdMessage() {
        return this.getRandomMessage(messages.chadId);
    }

    /**
     * @param {object} options
     * @return {string}
     */
    getStartMessage(options) {
        const chatId = options.hasOwnProperty('chatId') ? options.chatId : '0';

        return this.getRandomMessage(messages.start)
            + DELIMITER_SENTENCE
            + this.getChadIdMessage()
            + DELIMITER_WORD
            + chatId;
    }

    /**
     * @return {string}
     */
    getBalanceMessage() {
        return '';
    }

    /**
     * @return {string}
     */
    getCommandException() {
        return this.getRandomMessage(messages.commandException);
    }

}