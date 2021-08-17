import mysql from "mysql2";
require("dotenv").config({ path: ".env.default" });

const pool = mysql.createPool({
	host: "localhost",
	password: process.env.DB_PASS,
	database: process.env.DB_DATABASE,
	user: process.env.DB_USER,
});

export default pool;