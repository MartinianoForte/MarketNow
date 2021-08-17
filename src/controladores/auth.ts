import pool from "../modulos/conexion";
import { Request, Response, NextFunction } from "express";
import * as bcryptjs from "bcrypt";
import { RowDataPacket, OkPacket, ResultSetHeader } from "mysql2";
import "express-session";

declare module "express-session" {
	interface SessionData {
		idUser: number;
		email: string;
		name: string;
		loggedin: boolean;
	}
}

const promisePool = pool.promise();

export const singUp = async (req: Request, res: Response) => {
	const pass = await bcryptjs.hash(req.body.contra, 8);
	const post = req.body;
	pool.query(
		"INSERT INTO usuarios(nombre, email, clave, fechaReg, rol) VALUES (?,?,?,CURDATE(),?)",
		[post.nombre, post.email, pass, post.rol], (error, result) => {
			if (error){ 
				if (error.errno == 1062) res.send('este email ya esta registrado');
				else throw error;
			}
			else {
			const row = <ResultSetHeader>result;
			const insertSQL = (sql: string, valores:any[]) => {
				pool.query(sql,valores,(error, rowDos) => {
						if (error) throw error;
						console.log(rowDos);
						res.redirect("/");
					}
				);
			}
			if (post.rol == 1) //comercio
				insertSQL("INSERT INTO comercio(dni, direccion, estado, telefono, nombreLocal, idUsuario) VALUES (?,?,?,?,?,?)",
			 	[post.dni, post.direccion, true, post.telefono, post.nombreLocal, row.insertId])
			else if (post.rol == 2) //proveedor
				insertSQL("INSERT INTO proveedor(dni, direccion, telefono, nombreLocal, idUsuario) VALUES (?,?,?,?,?)",
			 	[post.dni, post.direccion, post.telefono, post.nombreLocal, row.insertId])
			else if (post.rol == 3) //cliente
				insertSQL("insert into clientes(idUsuario) values(?)",
					[row.insertId])
			}
		}
	);
};

export const singIn = async (req: Request, res: Response) => {
	const pass = req.body.contra;
	const email = req.body.email;
	console.log(pass)
	const [result, fields] = await promisePool.query("SELECT * FROM usuarios WHERE email = ?", email);
	const rows = <RowDataPacket>result;
	console.log(rows)
	if (rows.length == 0) res.json("El usuario no existe");
	else if (await bcryptjs.compare(pass, rows[0].clave)) {
		req.session.loggedin = true;
		req.session.email = email;
		req.session.name = rows[0].nombre;
		req.session.idUser = rows[0].id;
		res.redirect("/comercio/cupones");
	} else res.json("Contraseña incorrecta");
};

export const logOut = (req: Request, res: Response) => {
	req.session.destroy(() => res.redirect("/"));
};

export const verifyLogged = (req: Request, res: Response, next: NextFunction) => {
	if (req.session.loggedin) next();
	else res.render('avisos/noLogueado.html');
}

export const enviarEmail = (req: Request, res: Response) => {
	const email = req.body.email;
	res.render('avisos/seEnvioEmail.html', ({email: email}));
}