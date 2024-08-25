module.exports = {
  apps: [
    {
      name: "server-bot",
      cwd: "/var/pm2/apps/server-bot",
      watch: true,
      log_date_format: "YYYY-MM-DD HH:mm Z",

      env: {
        TG_TOKEN: "",
        DATA_CHAT_ID: "",

        DB_HOST: "",
        DB_USER: "",
        DB_PASSWORD: "",
      },
    },
  ],
};
