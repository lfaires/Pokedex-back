import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserIdAndPokemonIdColumnsInPokemonsUsersTable1628280615194 implements MigrationInterface {
    name = 'CreateUserIdAndPokemonIdColumnsInPokemonsUsersTable1628280615194'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" DROP CONSTRAINT "FK_9950a15a4d2bf490a0df9e7d1ee"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" DROP CONSTRAINT "FK_597fa92dd8d4ebaede44e316179"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" ALTER COLUMN "pokemonId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" ADD CONSTRAINT "FK_9950a15a4d2bf490a0df9e7d1ee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" ADD CONSTRAINT "FK_597fa92dd8d4ebaede44e316179" FOREIGN KEY ("pokemonId") REFERENCES "pokemons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" DROP CONSTRAINT "FK_597fa92dd8d4ebaede44e316179"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" DROP CONSTRAINT "FK_9950a15a4d2bf490a0df9e7d1ee"`);
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" ALTER COLUMN "pokemonId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" ADD CONSTRAINT "FK_597fa92dd8d4ebaede44e316179" FOREIGN KEY ("pokemonId") REFERENCES "pokemons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."pokemonsUsers" ADD CONSTRAINT "FK_9950a15a4d2bf490a0df9e7d1ee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
