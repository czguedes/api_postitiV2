
import { Recado, RecadoDTO } from "../../../models";
import { RecadosRepository } from "../repositories/recados.repository";

type CriarRecadoRetorno = {
    sucesso: boolean
    mensagem: string
    dadosRetornados?: Recado
}

export class CriarRecado {
    #dados: RecadoDTO

    constructor(dados: RecadoDTO) {
        this.#dados = dados
    }

    async execute(): Promise<CriarRecadoRetorno> {

        const repository = new RecadosRepository()

        const usuarioExiste = await repository.usuarioExiste(this.#dados.criadoPor)

        if (!usuarioExiste) {
            return {
                sucesso: false,
                mensagem: 'Usuário não cadastrado?!'
            }
        }

        const retorno = await repository.criarRecado(this.#dados)

        if (!retorno) {
            return {
                sucesso: false,
                mensagem: 'Recado não foi criado.'
            }
        }

        return {
            sucesso: true,
            mensagem: 'Recado criado com sucesso',
            dadosRetornados: retorno
        }


    }
}