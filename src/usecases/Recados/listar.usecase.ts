import { Recado } from "../../models"
import { RecadosRepository } from "../../repositories"

type RetornoListar = {
    sucesso: boolean
    mensagem: string
    dadosRetornados?: Recado[]
}

export class ListarRecados {

    async listarTodos(idUsuario: string): Promise<RetornoListar> {

        const repository = new RecadosRepository()

        const busca = await repository.usuarioExiste(idUsuario)

        if (!busca) {
            return {
                sucesso: false,
                mensagem: 'Usuário não cadastrado.'
            }
        }

        const dadosRetornados = await repository.listarRecados(idUsuario)

        return {
            sucesso: true,
            mensagem: 'Recados listados com sucesso.',
            dadosRetornados: dadosRetornados
        }
    }

    async listarArquivados(idUsuario: string): Promise<RetornoListar> {

        const repository = new RecadosRepository()

        const busca = await repository.usuarioExiste(idUsuario)

        if (!busca) {
            return {
                sucesso: false,
                mensagem: 'Usuário não cadastrado.'
            }
        }

        const dadosRetornados = await repository.listarArquivados(idUsuario)

        return {
            sucesso: true,
            mensagem: 'Recados arquivados listados com sucesso.',
            dadosRetornados: dadosRetornados
        }
    }
}