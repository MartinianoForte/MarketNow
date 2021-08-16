import pool from '../modulos/conexion';
import { Request, Response, NextFunction } from "express";
import * as bcryptjs from 'bcrypt';
import {RowDataPacket, OkPacket} from 'mysql2';
import 'express-session';

declare module 'express-session' {
    interface SessionData {
    	idUser: number,
        name: string,
        loggedin: boolean
    }
};

const promisePool = pool.promise();

export const singUp = async (req: Request, res: Response) => {
	const pass = await bcryptjs.hash(req.body.contra, 8);
	const post = req.body;
	const valores = [post.nombre, post.email, pass]
	pool.query('INSERT INTO usuarios(nombre, email, contra) VALUES (?,?,?)', valores, (error, row) => {
		if (error) throw error;
		res.redirect('/');
	});
}

 export const singIn = async (req: Request, res: Response) => {
	const pass = req.body.contra;
	const nombre = req.body.nombre;
	const [result, fields] = await promisePool.query("SELECT * FROM usuarios WHERE email = ?", nombre);
	const rows = <RowDataPacket> result;
			if (rows.length == 0) res.json('El usuario no existe');
			else if ((await bcryptjs.compare(pass, rows[0].contra))){
				req.session.loggedin = true;
				req.session.name = nombre;
				req.session.idUser = rows[0].id;
				res.cookie('NombreUsuario', nombre, {expires: new Date(Date.now() + 1555200000)})
				res.redirect('/comercio/cupones');
			} 
			else res.json('Contraseña incorrecta');
	} 

 export const logOut = (req: Request, res: Response) => {
 	res.clearCookie('NombreUsuario')
	req.session.destroy(() => res.redirect('/'));	
}

export const verifyLogged = (req: Request, res: Response, next: NextFunction) => {
	if(req.session.loggedin) next();
	else{
		res.send(`
			<style type="text/css">
			*{
				background: #fff;
				color:#333;
			}
			p,a {
				font-size: 20px;
			}
			</style>
			<h1>Usted no esta loggeado</h1>
			<p>Para poder acceder a esta seccion antes debe iniciar sesion</p>
			<a href="/home/Iniciar-sesion">Iniciar Sesion</a><br>
			<a href="/">Ir al inicio</a>
		`)
	}
}