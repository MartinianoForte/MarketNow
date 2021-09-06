import express, { Application } from "express";
import rutas from "./rutas";
import path from "path";
import mySqlSession from "express-mysql-session";
import favicon from 'serve-favicon';
require("dotenv").config({ path: ".env.default" });

class App {
	private app: Application;
	private puerto?: number;
	constructor(puerto: number) {
		this.puerto = puerto;
		this.app = express();
		this.config();
		this.middlewars();
		this.sesiones();
		this.rutas();
	}

	config() {
		this.app.set("port", this.puerto || 3000);
		this.app.set("views", path.join(__dirname, "..", "views"));
		this.app.engine("html", require("ejs").renderFile);
		this.app.set("view engine", "ejs");
	}

	middlewars() {
		this.app.use(favicon(path.join(__dirname, '..', '/public/img/favicon.ico'))); 
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
		this.app.use(
			"/static",
			express.static(path.join(__dirname, "..", "public"))
		);
	}

	sesiones() {
		const session = require("express-session");
		const MySQLStore = mySqlSession(session);
		const opciones = {
			host: "localhost",
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: "prueba_session",
		};
		const sessionStore = new MySQLStore(opciones);
		this.app.use(
			session({
				key: "session_cookie",
				secret: "Peron",
				resave: false,
				saveUninitialized: true,
				cookie: {
					maxAge: 1000 * 60 * 1000,
				},
			})
		);
	}

	rutas() {
		this.app.use("/", rutas);
	}

	prender() {
		this.app.listen(this.app.get("port"), () => {
			console.log("Servidor escuchando en puerto", this.app.get("port"));
		});
	}
}

function main() {
	const servidor = new App(3000);
	servidor.prender();
}

main();