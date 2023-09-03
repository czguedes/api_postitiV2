import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'usuarios' })
export class UsuarioEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({
        type: "varchar",
        length: 150,
        nullable: false
    })
    nome!: string

    @Column({
        type: "varchar",
        length: 150,
        nullable: false,
        unique: true
    })
    email!: string

    @Column({
        type: "varchar",
        length: 16,
        nullable: false
    })
    senha!: string

    @CreateDateColumn({ name: 'criado_em' })
    criadoEm!: Date

    @UpdateDateColumn({ name: 'alterado_em' })
    alteradoEm!: Date
}
