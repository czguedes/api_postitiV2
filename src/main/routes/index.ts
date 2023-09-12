import express, { Request, Response } from 'express';
import { RecadosController } from "../../app/features/Recados/controllers/recados.controller";
import { UsuariosController } from "../../app/features/Usuarios/controllers/usuarios.controller";
import { validarCamposRecados, validarDadosUsuario, validarIdRecado, validarIdUsuario, validarLogin, validarTipagem } from "../../app/shared/middlewares";

export function routesApp() {
    const app = express.Router()

    app.get('/', (request: Request, response: Response) => {
        return response.send('Postiti API funcionando!');
    });

    // USUARIOS
    const controllerUser = new UsuariosController()

    // Criar usuário
    app.post('/usuarios/cadastrar', validarDadosUsuario, controllerUser.cadastrar)

    // Listar usuário - Logar
    app.post('/usuarios/logar', validarLogin, controllerUser.logar)


    // RECADOS
    const controllerRecados = new RecadosController()

    // Criar recado
    app.post('/recados', validarIdUsuario, validarCamposRecados, controllerRecados.criar)

    // Deletar recado
    app.delete('/recados/:id', validarIdRecado, controllerRecados.excluir)

    // Listar recados

    app.get('/recados/:idUsuario', controllerRecados.listarTodos)


    // Editar recado
    app.put('/recados/editar/:idUsuario', validarTipagem, controllerRecados.editar)

}

