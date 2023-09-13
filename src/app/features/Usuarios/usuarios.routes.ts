import express from "express";
import { validarDadosUsuario, validarLogin } from "../../shared/middlewares";
import { UsuariosController } from "./controllers/usuarios.controller";

const routerUsuarios = express.Router();

// USUARIOS
const controllerUser = new UsuariosController()

// Criar usuário
routerUsuarios.post('/cadastrar', validarDadosUsuario, controllerUser.cadastrar)

// Listar usuário - Logar
routerUsuarios.post('/logar', validarLogin, controllerUser.logar)


export default routerUsuarios