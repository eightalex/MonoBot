export default class TelegramDataHandler {

    /**
     * @param {TelegramAdapter} telegram
     * @param {MessageGenerator} messageGenerator
     * @param {StringHandler} stringHandler
     */
    constructor(telegram, messageGenerator, stringHandler) {
        this.telegram = telegram;
        this.messageGenerator = messageGenerator;
        this.stringHandler = stringHandler;
    }

    /**
     * @param {json} contents
     */
    handle(contents) {
        this.chatId = contents.message.chat.id;
        this.text = contents.message.text;

        this.handleCommand();
    }

    /**
     * @return {void}
     */
    handleCommand() {
        const command = this.stringHandler.getCommand(this.text);

        switch (command) {
            case '/start':
                this.handleStart();
                break;
            case '/balance':
                this.handleBalance();
                break;
            default:
                this.handleCommandException();
        }
    }

    /**
     * @return {void}
     */
    handleStart() {
        this.telegram.message(this.chatId, this.messageGenerator.getMessage('start', {chatId: this.chatId}));
    }

    /**
     * @return {void}
     */
    handleBalance() {
        this.telegram.message(this.chatId, this.messageGenerator.getMessage('balance'));
    }

    /**
     * @return {void}
     */
    handleCommandException() {
        this.telegram.message(this.chatId, this.messageGenerator.getMessage('commandException'));
    }

}