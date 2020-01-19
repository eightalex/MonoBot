import MessageGenerator from './services/Message/MessageGenerator';
import MessageHandler from './services/Message/MessageHandler';
import MonoAdapter from './services/Mono/MonoAdapter';
import MonoDataHandler from './services/Mono/MonoDataHandler';
import TelegramAdapter from './services/Telegram/TelegramAdapter';
import TelegramDataHandler from './services/Telegram/TelegramDataHandler';
import RequestHandler from './services/RequestHandler';
import NumberHandler from './utils/NumberHandler';
import ObjectHandler from './utils/ObjectHandler';
import StringHandler from './utils/StringHandler';

const numberHandler = new NumberHandler();
const objectHandler = new ObjectHandler();
const stringHandler = new StringHandler();
const mono = new MonoAdapter();
const telegram = new TelegramAdapter();
const messageGenerator = new MessageGenerator();
const messageHandler = new MessageHandler(stringHandler);
const monoDataHandler = new MonoDataHandler(telegram, numberHandler, messageHandler);
const telegramDataHandler = new TelegramDataHandler(telegram, messageGenerator, stringHandler);
const requestHandler = new RequestHandler(monoDataHandler, telegramDataHandler, objectHandler);

global.doPost = event => {
    requestHandler.handlePost(event.postData.contents);
};

global.setWebhook = () => {
    telegram.setWebhook();
    mono.setWebhook();
};