module.exports = {
  apps: [
    {
      name: "server-bot",
      cwd: "/home/ubuntu/pm/server-bot",
      script: "index.js",
      watch: true,
      watch_delay: 5000,
      log_date_format: "YYYY-MM-DD HH:mm Z",
      ignore_watch: ["temp"],

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
