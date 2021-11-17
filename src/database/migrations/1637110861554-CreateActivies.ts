import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivies1637110850954 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "activies",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "activy_date",
                        type: "timestamp",
                    },
                    {
                        name: "grade",
                        type: "decimal",
                    },
                    {
                        name: "courseUnitId",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
//                foreignKeys: [
//                    {
//                        name: "ActivyCourseUnit",
//                        referencedTableName: "course_units",
//                        referencedColumnNames: ["id"],
//                        columnNames: ["courseUnitId"]
//                    }
//                ]
            })
        )        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
