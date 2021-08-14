import { Request, Response } from "express";
import pool from "./modulos/conexion";

const promisePool = pool.promise();

export const inicio = async (req: Request, res: Response) => {
	const [rows, fields] = await promisePool.query("SELECT * FROM persona");
	console.log(rows);
	res.render("index.html");
};

export const index = (req: Request, res: Response) => {
	res.render('index.html');
}

export const home = (req: Request, res: Response) => {
	const param = req.params;
	res.render(param.page + '.html');
}