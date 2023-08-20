require("dotenv").config();
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TG_TOKEN);

const backup = require("./modules/dbBackup");

backup(bot);
setInterval(() => {
  backup(bot);
}, 6 * 60 * 60 * 1000);

require("./modules/errLog")(bot);

bot.launch();
