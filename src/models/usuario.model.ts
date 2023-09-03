import { randomUUID } from "crypto"

export type UsuarioDTO = {
    nome: string
    email: string
    senha: string
}

export class Usuario {
    #id: string
    #nome: string
    #email: string
    #senha: string

    constructor(dados: UsuarioDTO) {
        this.#id = randomUUID()
        this.#nome = dados.nome
        this.#email = dados.email
        this.#senha = dados.senha
    }

    public toJSON() {
        const objUsuario = {
            id: this.#id,
            nome: this.#nome,
            email: this.#email,
            senha: this.#senha
        }

        return objUsuario
    }

    public noPassword() {
        const objUsuario = {
            id: this.#id,
            nome: this.#nome,
            email: this.#email,
        }

        return objUsuario
    }

}