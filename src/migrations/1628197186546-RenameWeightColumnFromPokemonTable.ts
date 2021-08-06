import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameWeightColumnFromPokemonTable1628197186546 implements MigrationInterface {
    name = 'RenameWeightColumnFromPokemonTable1628197186546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pokemons" RENAME COLUMN "weigth" TO "weight"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pokemons" RENAME COLUMN "weight" TO "weigth"`);
    }

}
