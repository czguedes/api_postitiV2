import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriaTabelaRecados1692918612414 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'recados',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isNullable: false,
                        default: 'uuid_generate_v4()',
                        isPrimary: true
                    },
                    {
                        name: 'titulo',
                        type: 'varchar',
                        length: '50',
                        default: null
                    },
                    {
                        name: 'recado',
                        type: 'varchar',
                        length: '255',
                        default: null
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
                    },
                    {
                        name: 'id_usuario',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'arquivado',
                        type: 'boolean',
                        default: false
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ['id_usuario'],
                        referencedTableName: 'usuarios',
                        referencedColumnNames: ['id']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('recados', true, true, true)
    }

}
