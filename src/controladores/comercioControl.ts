import { Request, Response } from "express";
import pool from "../modulos/conexion";
import { OkPacket, RowDataPacket } from "mysql2";

const promisePool = pool.promise();

export const comercio = (req: Request, res: Response) => {
	const param = req.params.page;
	const permitidas = ["cargaManual", "cupones", "Inventario", "reporteDiario"];
	if (typeof param === "string" && permitidas.includes(param))
		res.render(param + ".html", {
			nombre: req.session.name,
		});
	else res.redirect("/home/Iniciar-sesion");
};

export const nuevoProducto = (req: Request, res: Response) => {
	const verificar = (dato: any) =>
		(dato == undefined || dato == "")? null : parseInt(dato, 10);
	const post = req.body;
	pool.query(
		"INSERT INTO ArticuloCliente(nombre,cdb,categoria,iva,PdeGanancia,precioUnitario,precioVenta,cantidad,cantMinima,cantIdeal, idComercio) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
		[
		post.nombre,
		parseInt(post.cdb, 10),
		post.categoria,
		21,
		parseInt(post.PdeGanancia, 10),
		parseInt(post.precioUnitario, 10),
		parseInt(post.precioUnitario, 10) * ((parseInt(post.precioUnitario, 10) / 100) + 1),
		parseInt(post.cantidad),
		verificar(post.cantMinima),
		verificar(post.cantIdeal),
		(verificar(post.idComercio) == null)? req.session.idUser: post.idComercio,
		],
		(error, result) => {
			if (error) throw error;
			else {
				const row = <OkPacket>result;
				res.status(201).redirect('/comercio/cargaManual');
			}
		}
	);
};

export const verProductos = async (req: Request, res: Response) => {
	const [result, fields] = await promisePool.query("SELECT * FROM articulocliente WHERE idComercio = ?", req.session.idUser);
	const rows = <RowDataPacket>result;
	res.json(rows);
}