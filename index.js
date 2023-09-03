require("dotenv").config();
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TG_TOKEN);
const schedule = require("node-schedule");

const backup = require("./modules/dbBackup");

schedule.scheduleJob("0 */6 * * *", () => {
  backup(bot);
});

require("./modules/errLog")(bot);

bot.launch();
