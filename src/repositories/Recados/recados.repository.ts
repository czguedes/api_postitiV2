import { FindOptionsWhere } from "typeorm";
import { pgHelper } from "../../database";
import { RecadoEntity } from "../../database/entities/recado.entity";
import { UsuarioEntity } from "../../database/entities/usuario.entity";
import { Recado, RecadoDTO } from "../../models";
import { EditarRecadoDTO, RetornoEditar } from "../../usecases/Recados/editar.usecase";
import { RetornoExcluir } from "../../usecases/Recados/excluir.usecase";

export class RecadosRepository {

    constructor(private _manager = pgHelper.client.manager) { }

    async usuarioExiste(id: string): Promise<boolean> {

        const userEncontrado = await this._manager.findOne(UsuarioEntity, { where: { id } })

        return !!userEncontrado
    }

    async recadoExiste(idRcado: string): Promise<boolean> {
        const recadoEncontrado = await this._manager.findOne(RecadoEntity, { where: { id: idRcado } })

        return !!recadoEncontrado
    }

    async criarRecado(dados: RecadoDTO): Promise<Recado> {
        const { criadoPor, recado, titulo } = dados

        const novoRecado = this._manager.create(RecadoEntity, {
            recado, titulo, criadoPor
        })
        const recadoCriado = await this._manager.save(novoRecado)

        return this.entityToModel(recadoCriado)
    }

    async excluirRecado(id: string): Promise<RetornoExcluir> {

        const recadoDelete = await this._manager.delete(RecadoEntity, { id: id })

        if (!recadoDelete.affected) {
            return {
                sucesso: false,
                mensagem: 'Recado não encontrado.'
            }
        }

        return {
            sucesso: true,
            mensagem: 'Recado excluído com sucesso.',
            dadosRetornados: id
        }
    }

    async listarRecados(idUsuario: string): Promise<Recado[]> {
        const clausula: FindOptionsWhere<RecadoEntity> = {
            criadoPor: idUsuario,
            arquivado: false
        };

        const recadosFiltrados = await this._manager.find(RecadoEntity, {
            where: clausula
        })

        return recadosFiltrados.map((r) => this.entityToModel(r))
    }

    async listarArquivados(idUsuario: string): Promise<Recado[]> {
        const clausula: FindOptionsWhere<RecadoEntity> = {
            criadoPor: idUsuario,
            arquivado: true
        };

        const recadosFiltrados = await this._manager.find(RecadoEntity, {
            where: clausula
        })

        return recadosFiltrados.map((r) => this.entityToModel(r))
    }

    async editarRecado(dados: EditarRecadoDTO): Promise<RetornoEditar> {

        const { id, arquivado, recado, titulo } = dados


        const recadoEditar = await this._manager.update(RecadoEntity, { id }, { arquivado, recado, titulo })

        if (!recadoEditar.affected) {
            return {
                sucesso: false,
                mensagem: 'Recado não existe.'
            }
        }

        return {
            sucesso: true,
            mensagem: 'Recado atualizado com sucesso'
        }

    }

    private entityToModel(dadosDB: RecadoEntity): Recado {
        const { criadoPor, recado, titulo } = dadosDB

        const retorno = new Recado({
            criadoPor,
            recado: recado ?? '',
            titulo: titulo ?? ''
        })

        return retorno
    }
} 