import { Recado } from "../../../models"
import { CacheRepository } from "../../../shared/database/repositories/cache.repository"
import { RecadosRepository } from "../repositories/recados.repository"


type RetornoListar = {
    sucesso: boolean
    mensagem: string
    dadosRetornados?: Recado[]
}

export class ListarRecados {

    async listarTodos(idUsuario: string): Promise<RetornoListar> {

        const repository = new RecadosRepository()
        const cacheRepository = new CacheRepository()


        const busca = await repository.usuarioExiste(idUsuario)

        if (!busca) {
            return {
                sucesso: false,
                mensagem: 'Usuário não cadastrado.'
            }
        }


        const cacheDados = await cacheRepository.get<Recado[]>(`recados-usuario-${idUsuario}`)
        let dadosRetornados: Recado[] = []

        if (!cacheDados) {

            dadosRetornados = await repository.listarRecados(idUsuario)

            await cacheRepository.set<Recado[]>(`recados-usuario-${idUsuario}`, dadosRetornados)

        } else {
            dadosRetornados = cacheDados
        }


        return {
            sucesso: true,
            mensagem: 'Recados listados com sucesso.',
            dadosRetornados: dadosRetornados
        }

    }

    async listarArquivados(idUsuario: string): Promise<RetornoListar> {

        const repository = new RecadosRepository()
        const cacheRepository = new CacheRepository()

        const busca = await repository.usuarioExiste(idUsuario)

        if (!busca) {
            return {
                sucesso: false,
                mensagem: 'Usuário não cadastrado.'
            }
        }

        const cacheDados = await cacheRepository.get<Recado[]>(`arquivados-usuario-${idUsuario}`)
        let dadosRetornados: Recado[] = []

        if (!cacheDados) {
            dadosRetornados = await repository.listarArquivados(idUsuario)

            await cacheRepository.set(`arquivados-usuario-${idUsuario}`, dadosRetornados)

        } else {
            dadosRetornados = cacheDados
        }

        return {
            sucesso: true,
            mensagem: 'Recados arquivados listados com sucesso.',
            dadosRetornados: dadosRetornados
        }
    }
}