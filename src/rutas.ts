import { Router } from "express";
import * as controlador from "./controlador";

const ruta = Router();

//sin Iniciar sesion
ruta.get("/", controlador.index);

export default ruta;