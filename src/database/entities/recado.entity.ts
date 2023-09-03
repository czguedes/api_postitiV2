import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";

@Entity({ name: 'recados' })
export class RecadoEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({
        type: "varchar",
        length: 50,
        default: null
    })
    titulo?: string

    @Column({
        type: "varchar",
        length: 255,
        default: null
    })
    recado?: string

    @Column({ default: false })
    arquivado!: boolean

    @CreateDateColumn({ name: 'criado_em' })
    criadoEm!: Date

    @UpdateDateColumn({ name: 'alterado_em' })
    alteradoEm!: Date

    @Column({ name: 'id_usuario' })
    criadoPor!: string

    @ManyToOne(() => UsuarioEntity, (user) => user.id)
    @JoinColumn({
        name: 'id_usuario',
        referencedColumnName: 'id'
    })
    usuario!: UsuarioEntity
}
