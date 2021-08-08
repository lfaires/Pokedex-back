import {MigrationInterface, QueryRunner} from "typeorm";

export class SetDefaultFalseToInMyPokemonsColumn1628269250438 implements MigrationInterface {
    name = 'SetDefaultFalseToInMyPokemonsColumn1628269250438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" ALTER COLUMN "inMyPokemons" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" ALTER COLUMN "inMyPokemons" DROP DEFAULT`);
    }

}
