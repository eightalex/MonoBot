export default class MonoDataHandler {

    /**
     * @param {TelegramAdapter} telegram
     * @param {NumberHandler} numberHandler
     * @param {MessageHandler} messageHandler
     */
    constructor(telegram, numberHandler, messageHandler) {
        this.telegram = telegram;
        this.numberHandler = numberHandler;
        this.messageHandler = messageHandler;
    }

    /**
     * @param {json} contents
     */
    handle(contents) {
        const accountID = contents.data.account;

        if (this.isSpecificAccount(accountID) && !this.isRequiredAccount(accountID)) {
            return;
        }

        const monoAmount = contents.data.statementItem.amount;
        const monoBalance = contents.data.statementItem.balance;
        const monoDescription = contents.data.statementItem.description;

        const amount = this.numberHandler.prepareMonoAmount(monoAmount);
        const balance = this.numberHandler.prepareMonoBalance(monoBalance);
        const commentTelegram = this.messageHandler.prepareComment(monoDescription, amount, balance);

        this.telegram.message(process.env.CHAT_ID, commentTelegram);
    }

    /**
     * @param {string} accountID
     */
    isSpecificAccount(accountID) {
        return process.env.MONO_ACCOUNT_ID !== 'all';
    }

    /**
     * @param {string} accountID
     */
    isRequiredAccount(accountID) {
        return process.env.MONO_ACCOUNT_ID === accountID;
    }

}