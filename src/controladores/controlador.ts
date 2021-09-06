import { Request, Response } from "express";
import pool from "../modulos/conexion";
import { OkPacket, RowDataPacket } from "mysql2";

const promisePool = pool.promise();

export const index = (req: Request, res: Response) => {
	const loged = (req.session.loggedin == undefined)? false: true;
	res.render("index.html", ({loged: loged, rol: (req.session.rol)? req.session.rol: null}));
};

export const home = (req: Request, res: Response) => {
	const param = req.params.page;
	const loged = (req.session.loggedin == undefined)? false: true;
	const permitidas = ["Iniciar-sesion","nosotros","Nueva-contaseña","registrarse","Restablecer-Contraseña"];
	if (typeof param === "string" && permitidas.includes(param))
		res.render(param + ".html", ({loged: loged, rol: (req.session.rol)? req.session.rol: null}));
	else res.redirect("/home/Iniciar-sesion");
};

export const devPage = (req: Request, res: Response) => {
	const param = req.params.page;
	const loged = (req.session.loggedin == undefined)? false: true;
	res.render(param + ".html", ({loged: loged, nombre: 'admin', rol: (req.session.rol)? req.session.rol: null}));
};