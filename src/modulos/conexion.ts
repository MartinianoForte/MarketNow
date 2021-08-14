import mysql from "mysql2";

const pool = mysql.createPool({
	host: "localhost",
	password: "Tallern4",
	database: "Pruebas",
	user: "root",
});

export default pool;