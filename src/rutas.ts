import { Router } from "express";
import * as controlador from "./controladores/controlador";
import * as comercio from "./controladores/comercioControl";
import * as auth from "./controladores/auth";

const ruta = Router();

//sin Iniciar sesion
ruta.get("/", controlador.index);
ruta.get("/dev/:page", controlador.devPage);
ruta.get("/home/:page", controlador.home);
ruta.get("/logOut", auth.logOut);
ruta.get("/recuperePass/:token", auth.recuperePass);
ruta.post("/enviarEmail", auth.enviarCambioContra);
ruta.post("/singIn", auth.singIn);
ruta.post("/singUp", auth.singUp);
ruta.post("/nuevaPass/:token", auth.nuevaPass);

//Comercio
ruta.get("/comercio/productos", auth.verifyLogged, comercio.verProductos)
ruta.get("/comercio/reporteDiario", auth.verifyLogged, comercio.reporteDiario)
ruta.get("/comercio/:page", auth.verifyLogged, comercio.comercio);
ruta.post("/comercio/nuevoProducto", auth.verifyLogged, comercio.nuevoProducto)
ruta.post("/comercio/venderProducto",auth.verifyLogged, comercio.venderProducto)

export default ruta;