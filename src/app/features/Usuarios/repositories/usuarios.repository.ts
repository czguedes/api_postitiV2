import { UsuarioEntity } from "../../../shared/entities/usuario.entity";

import { ormConfig } from "../../../../main/config";
import { Usuario, UsuarioDTO } from "../../../models";
import { RespostaListar } from "../usecases/listar.usecase";



export class UsuariosRepository {

    constructor(private _manager = ormConfig.manager) { }

    async emailExiste(email: string): Promise<boolean> {

        const emailEncontrado = await this._manager.findOne(UsuarioEntity, {
            where: { email }
        })

        return !!emailEncontrado
    }

    async cadastrarUsuario(dados: UsuarioDTO): Promise<Usuario> {
        const { email, nome, senha } = dados

        const novoUsuario = this._manager.create(UsuarioEntity, { nome, senha, email })
        const usuarioCriado = await this._manager.save(novoUsuario)

        return this.entityToModel(usuarioCriado)
    }

    async testarUsuario(email: string, senha: string): Promise<RespostaListar> {

        const user = await this._manager.findOne(UsuarioEntity, {
            where: { email, senha }
        })

        if (!user) {
            return {
                sucesso: false,
                mensagem: 'Email e/ou senha incorretos.'
            }
        }

        const usuarioDb = this.entityToModel(user)

        return {
            sucesso: true,
            mensagem: 'Usuário logado com sucesso!',
            dadoCadastrado: usuarioDb.noPassword()
        }
    }

    private entityToModel(dadosDB: UsuarioEntity): Usuario {
        return new Usuario(dadosDB)
    }
}