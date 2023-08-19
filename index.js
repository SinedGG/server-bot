require("dotenv").config();
const schedule = require("node-schedule");
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TG_TOKEN);

const backup = require("./modules/dbBackup");
const rule = new schedule.RecurrenceRule();
rule.hour = [0, 6, 12, 18];
schedule.scheduleJob(rule, () => {
  backup(bot);
});

require("./modules/errLog")(bot);

bot.launch();
