import { Router } from "express";
import * as controlador from "./controladores/controlador";
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

//Inicio sesion
ruta.get("/comercio/:page", auth.verifyLogged, controlador.comercio);

export default ruta;