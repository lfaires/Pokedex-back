import {MigrationInterface, QueryRunner} from "typeorm";

export class SetDefaultTrueToInMyPokemonsColumn1628269682457 implements MigrationInterface {
    name = 'SetDefaultTrueToInMyPokemonsColumn1628269682457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" ALTER COLUMN "inMyPokemons" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" ALTER COLUMN "inMyPokemons" SET DEFAULT false`);
    }

}
