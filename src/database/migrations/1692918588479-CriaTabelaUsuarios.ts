import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriaTabelaUsuarios1692918588479 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false,
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '150',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '150',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'senha',
                        type: 'varchar',
                        length: '16',
                        isNullable: false
                    },
                    {
                        name: 'criado_em',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()'
                    },
                    {
                        name: 'alterado_em',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios', true, true, true)
    }

}
