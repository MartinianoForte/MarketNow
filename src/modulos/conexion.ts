import mysql from "mysql2";
require('dotenv').config({path: '.env.default'});

const pool = mysql.createPool({
	host: "localhost",
	password: process.env.DB_PASS,
	database: "Pruebas",
	user: process.env.DB_USER,
});

export default pool;