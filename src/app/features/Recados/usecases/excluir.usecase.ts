import { CacheRepository } from "../../../shared/database/repositories/cache.repository"
import { RecadosRepository } from "../repositories/recados.repository"


export type RetornoExcluir = {
    sucesso: boolean,
    mensagem: string,
    dadosRetornados?: string
}

export class ExcluirRecado {
    async execute(idRecado: string, idUsuario: string): Promise<RetornoExcluir> {
        const repository = new RecadosRepository()
        const redis = new CacheRepository()

        const busca = await repository.usuarioExiste(idUsuario)

        if (!busca) {
            return {
                sucesso: false,
                mensagem: 'Usuário não cadastrado.'
            }
        }

        const retorno = await repository.excluirRecado(idRecado)

        await redis.delete(`recados-usuario-${idUsuario}`)

        return retorno
    }
}