import { Request, Response } from "express";
import pool from "../modulos/conexion";
import { OkPacket, RowDataPacket } from "mysql2";

const promisePool = pool.promise();

// export const inicio = async (req: Request, res: Response) => {
// 	const [result, fields] = await promisePool.execute("SELECT * FROM usuarios");
// 	const rows = <RowDataPacket>result;
// 	console.log(rows[0].nombre);
// 	res.render("index.html");
// };

export const index = (req: Request, res: Response) => {
	const loged = (req.session.loggedin == undefined)? false: true;
	res.render("index.html", ({loged: loged}));
};

export const home = (req: Request, res: Response) => {
	const param = req.params.page;
	const loged = (req.session.loggedin == undefined)? false: true;
	const permitidas = ["Iniciar-sesion","nosotros","Nueva-contaseña","registrarse","Restablecer-Contraseña"];
	if (typeof param === "string" && permitidas.includes(param))
		res.render(param + ".html", ({loged: loged}));
	else res.redirect("/home/Iniciar-sesion");
};

export const comercio = (req: Request, res: Response) => {
	const param = req.params.page;
	const permitidas = ["Cargar-Producto", "cupones", "Inventario"];
	if (typeof param === "string" && permitidas.includes(param))
		res.render(param + ".html", {
			nombre: req.session.name,
		});
	else res.redirect("/home/Iniciar-sesion");
};

export const devPage = (req: Request, res: Response) => {
	const param = req.params.page;
	const loged = (req.session.loggedin == undefined)? false: true;
	res.render(param + ".html", ({loged: loged, nombre: 'admin'}));
};