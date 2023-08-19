module.exports = (bot) => {
  const pm2 = require("pm2");
  pm2.connect(function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("Connected to pm2");
      pm2.launchBus(function (err, bus) {
        bus.on("log:err", function (err) {
          console.log(err);
          bot.telegram.sendMessage(
            460266962,
            `App ${err.process.name} error message:\n\n${err.data}`
          );
        });
      });
    }
  });
};
