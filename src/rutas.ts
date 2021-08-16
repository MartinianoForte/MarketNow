import { Router } from "express";
import * as controlador from "./controladores/controlador";
import * as auth from './controladores/auth';

const ruta = Router();

//sin Iniciar sesion
ruta.get("/", controlador.inicio);
ruta.get("/home/:page", controlador.home);
ruta.get('/logOut', auth.logOut)
ruta.get('/dev/:page', controlador.devPage)
ruta.post('/singUp', auth.singUp);
ruta.post('/singIn', auth.singIn);

//Inicio sesion
ruta.get('/comercio/:page', auth.verifyLogged, controlador.comercio)


export default ruta;