import { RecadosRepository } from "../../repositories";

export type RetornoExcluir = {
    sucesso: boolean,
    mensagem: string,
    dadosRetornados?: string
}

export class ExcluirRecado {
    async execute(id: string): Promise<RetornoExcluir> {
        const repository = new RecadosRepository()

        const retorno = await repository.excluirRecado(id)

        return retorno
    }
}