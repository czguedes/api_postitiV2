import { Request, Response } from "express";
import { RecadoDTO } from "../../../models";

import { CriarRecado } from "../usecases/criar.usecase";
import { EditarRecado } from "../usecases/editar.usecase";
import { ExcluirRecado } from "../usecases/excluir.usecase";
import { ListarRecados } from "../usecases/listar.usecase";

export class RecadosController {
    async criar(req: Request, res: Response) {
        const { titulo, recado, criadoPor }: RecadoDTO = req.body

        const usecase = new CriarRecado({ titulo, recado, criadoPor })

        const retorno = await usecase.execute()

        if (!retorno.sucesso) {
            return res.status(400).json(retorno)
        }

        return res.status(201).json(retorno)
    }

    async excluir(req: Request, res: Response) {
        const idUsuario = req.body
        const idRecado = req.params.id

        const usecase = new ExcluirRecado()
        const retorno = await usecase.execute(idRecado, idUsuario)

        if (!retorno.sucesso) {
            return res.status(404).json(retorno)
        }

        return res.status(200).json(retorno)
    }

    async listarTodos(req: Request, res: Response) {
        const { arquivado } = req.query
        const { idUsuario } = req.params

        const usecase = new ListarRecados()


        if (arquivado === 'false') {
            const retorno = await usecase.listarTodos(idUsuario)
            return res.status(200).json(retorno)
        }

        const retorno = await usecase.listarArquivados(idUsuario)
        return res.status(200).json(retorno)
    }

    async editar(req: Request, res: Response) {
        const { idUsuario } = req.params
        const { id, titulo, recado, arquivado } = req.body

        const usecase = new EditarRecado({ id, titulo, recado, arquivado })
        const retorno = await usecase.execute(idUsuario)

        if (!retorno.sucesso) {
            return res.status(404).json(retorno)
        }

        return res.status(200).json(retorno)
    }

}