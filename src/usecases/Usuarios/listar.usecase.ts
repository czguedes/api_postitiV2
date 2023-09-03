import { UsuariosRepository } from "../../repositories";

export type UsuariosSemSenha = {
    id: string
    nome: string
    email: string
}

export type RespostaListar = {
    sucesso: boolean,
    mensagem: string,
    dadoCadastrado?: UsuariosSemSenha
}


export class ListarUsuario {

    async execute(emailUser: string, senhaUser: string): Promise<RespostaListar> {

        const repository = new UsuariosRepository()

        const busca = await repository.emailExiste(emailUser)

        if (!busca) {
            return {
                sucesso: false,
                mensagem: 'Usuário não cadastrado!'
            }
        }

        const retorno = await repository.testarUsuario(emailUser, senhaUser)

        if (!retorno.sucesso) {
            return retorno
        }

        return retorno
    }

}