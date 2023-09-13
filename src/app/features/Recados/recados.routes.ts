import express from "express";
import { validarCamposRecados, validarIdRecado, validarIdUsuario, validarTipagem } from "../../shared/middlewares";
import { RecadosController } from "./controllers/recados.controller";

const routerRecados = express.Router();

// RECADOS
const controllerRecados = new RecadosController()

// Criar recado
routerRecados.post('/', validarIdUsuario, validarCamposRecados, controllerRecados.criar)

// Deletar recado
routerRecados.delete('/:id', validarIdRecado, controllerRecados.excluir)

// Listar recados

routerRecados.get('/:idUsuario', controllerRecados.listarTodos)


// Editar recado
routerRecados.put('/editar/:idUsuario', validarTipagem, controllerRecados.editar)

export default routerRecados;
