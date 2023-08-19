module.exports = async (bot) => {
  const { execSync } = require("child_process");
  const mysql = require("mysql2/promise");

  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  };
  const connection = await mysql.createConnection(dbConfig);

  try {
    const [rows] = await connection.query("SHOW DATABASES;");
    const databases = rows
      .map((row) => row.Database)
      .filter(
        (db) =>
          !db.startsWith("_") &&
          db !== "information_schema" &&
          db !== "performance_schema" &&
          db !== "mysql"
      );

    for (const db of databases) {
      console.log(`Dumping database: ${db}`);
      const dumpCommand = `mysqldump --host=${dbConfig.host} --user=${dbConfig.user} --password=${dbConfig.password} --databases ${db} > ./temp/${db}.sql`;
      await execSync(dumpCommand);
      bot.telegram.sendDocument(process.env.DATA_CHAT_ID, {
        source: `./temp/${db}.sql`,
      });
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    connection.end();
  }
};
