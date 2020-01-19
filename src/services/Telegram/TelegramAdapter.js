export default class TelegramAdapter {

    /**
     * @type {string}
     */
    #token = process.env.TELEGRAM_TOKEN;

    /**
     * @type {string}
     */
    #googleAppUrl = process.env.GOOGLE_APP_URL;

    /**
     * @type {string}
     */
    #apiUrl = 'https://api.telegram.org/bot';

    /**
     * @param {string} method
     * @param {object} params
     * @return {Promise<Response>}
     */
    post(method, params) {
        const url = this.#apiUrl + this.#token + '/' + method;
        return UrlFetchApp.fetch(url, {'method': 'post', 'payload': params});
    }

    /**
     * @param {string|number} chat_id
     * @param {string} text
     * @param {object} options
     */
    message(chat_id, text, options = {}) {
        this.post('sendMessage', Object.assign({chat_id, text}, options));
    }

    /**
     * @return {Promise<Response>}
     */
    setWebhook() {
        return UrlFetchApp.fetch(this.#apiUrl + this.#token + '/setWebhook?url=' + this.#googleAppUrl);
    }

}