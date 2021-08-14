import express, { Application } from "express";
import rutas from "./rutas";
import path from "path";
require('dotenv').config({path: '.env.default'});

class App {
	private app: Application;
	private puerto?: number;
	constructor(puerto: number) {
		this.puerto = puerto;
		this.app = express();
		this.config();
		this.middlewars();
		this.rutas();
	}

	config() {
		this.app.set("port", this.puerto || 3000);
		this.app.set("views", path.join(__dirname, "..", "views"));
		this.app.engine("html", require("ejs").renderFile);
		this.app.set("view engine", "ejs");
	}

	middlewars() {
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.static(path.join(__dirname, "..", "public")));
	}

	rutas() {
		this.app.use("/", rutas);
	}

	prender() {
		this.app.listen(this.app.get("port"), () => {
			console.log("Servidor escuchando en", this.app.get("port"));
		});
	}
}

function main() {
	const servidor = new App(3000);
	servidor.prender();
}

main();