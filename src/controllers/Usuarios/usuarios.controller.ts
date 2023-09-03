import { Request, Response } from "express";
import { CadastrarUsuario } from "../../usecases/Usuarios/cadastrar.usecase";
import { ListarUsuario } from "../../usecases/Usuarios/listar.usecase";

export class UsuariosController {

    async cadastrar(req: Request, res: Response) {
        const { nome, email, senha } = req.body

        const usecase = new CadastrarUsuario({ nome, email, senha })
        const resposta = await usecase.execute()

        if (!resposta.sucesso) {
            return res.status(400).json(resposta)
        }

        return res.status(201).json(resposta)
    }

    async logar(req: Request, res: Response) {
        const { email, senha } = req.body
        const usecase = new ListarUsuario()
        const resposta = await usecase.execute(email, senha)

        if (!resposta.sucesso) {
            return res.status(404).json(resposta)
        }

        return res.status(200).json(resposta)
    }


}