
export type RecadoDTO = {
    id: string
    titulo: string
    recado: string
    criadoPor: string
}

export class Recado {
    #id: string
    #titulo: string
    #recado: string
    #criadoPor: string
    #criadoEm: string
    #arquivado: boolean

    constructor(dados: RecadoDTO) {
        this.#id = dados.id
        this.#titulo = dados.titulo
        this.#recado = dados.recado
        this.#criadoPor = dados.criadoPor
        this.#criadoEm = new Date().toLocaleDateString()
        this.#arquivado = false
    }

    toJSON() {
        const objRecado = {
            id: this.#id,
            titulo: this.#titulo,
            recado: this.#recado,
            criadoPor: this.#criadoPor,
            criadoEm: this.#criadoEm,
            arquivado: this.#arquivado
        }

        return objRecado
    }


    public set novoTitulo(novoTitulo: string) {
        this.#titulo = novoTitulo;
    }


    public set novoRecado(novoRecado: string) {
        this.#recado = novoRecado;
    }


    public set switchArquivado(arquivar: boolean) {
        this.#arquivado = arquivar
    }


    public set novaData(data: string) {
        this.#criadoEm = data;
    }




}