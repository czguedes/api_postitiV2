import { Recado } from "../../../models"
import { CacheRepository } from "../../../shared/database/repositories/cache.repository"
import { RecadosRepository } from "../repositories/recados.repository"


export type EditarRecadoDTO = {
    id: string
    titulo?: string
    recado?: string
    arquivado?: boolean
}

export type RetornoEditar = {
    sucesso: boolean
    mensagem: string
    dadosRetornados?: Recado
}

export class EditarRecado {
    #dados: EditarRecadoDTO

    constructor(dados: EditarRecadoDTO) {
        this.#dados = dados
    }

    async execute(idUsuario: string): Promise<RetornoEditar> {

        const repository = new RecadosRepository()
        const redis = new CacheRepository()

        const usuarioExiste = await repository.usuarioExiste(idUsuario)

        if (!usuarioExiste) {
            return {
                sucesso: false,
                mensagem: 'Usuário não cadastrado'
            }
        }

        const recadoExiste = await repository.recadoExiste(this.#dados.id)

        if (!recadoExiste) {
            return {
                sucesso: false,
                mensagem: 'Este recado não existe.'
            }
        }

        const retorno = await repository.editarRecado(this.#dados)

        await redis.delete(`recados-usuario-${idUsuario}`)

        if (!retorno.sucesso) {
            return {
                sucesso: retorno.sucesso,
                mensagem: retorno.mensagem
            }
        }

        return {
            sucesso: retorno.sucesso,
            mensagem: retorno.mensagem,
            dadosRetornados: retorno.dadosRetornados
        }
    }
}