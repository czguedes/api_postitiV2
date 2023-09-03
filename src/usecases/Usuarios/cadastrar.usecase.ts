import { Usuario, UsuarioDTO } from "../../models";
import { UsuariosRepository } from "../../repositories";

type RespostaCadastro = {
    sucesso: boolean
    mensagem: string
    dadoCadastrado?: Usuario
}

export class CadastrarUsuario {
    #dados: UsuarioDTO

    constructor(dados: UsuarioDTO) {
        this.#dados = dados
    }

    async execute(): Promise<RespostaCadastro> {

        const repository = new UsuariosRepository()

        const busca = await repository.emailExiste(this.#dados.email)

        if (busca) {
            return {
                sucesso: false,
                mensagem: 'Email já cadastrado.'
            }
        }

        const retorno = await repository.cadastrarUsuario(this.#dados)

        return {
            sucesso: true,
            mensagem: 'Usuário cadastrado com sucesso!',
            dadoCadastrado: retorno
        }
    }
}