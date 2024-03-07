require("dotenv").config();
const TelegramApi = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_BOT_TOKEN;
const url_app = process.env.URL_APP;

const bot = new TelegramApi(token, { polling: true });

bot.on("message", async (msg) => {
  console.log(msg);
  const text = msg.text;
  const chatId = msg.chat.id;
  if (text === "/start") {
    await bot.sendSticker(
      chatId,
      "https://tlgrm.ru/_/stickers/0fa/d9f/0fad9f6f-8455-41bc-a453-e8d389c2dadd/3.jpg"
    );
    await bot.sendMessage(chatId, `Добро пожаловать ${msg.from.first_name}!`, {
      reply_markup: {
        keyboard: [[{ text: "Открыть Buyergram", web_app: { url: url_app } }]],
      },
    });
  } else {
    await bot.sendMessage(chatId, `${msg.web_app_data.data}`);
  }
});
