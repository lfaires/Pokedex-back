import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatingPokemonUserTable1628268630963 implements MigrationInterface {
    name = 'CreatingPokemonUserTable1628268630963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemonsUsers" ("id" SERIAL NOT NULL, "inMyPokemons" boolean NOT NULL, "userId" integer, "pokemonId" integer, CONSTRAINT "PK_602e702b0438adc6f010f1e140e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pokemonsUsers" ADD CONSTRAINT "FK_9950a15a4d2bf490a0df9e7d1ee" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pokemonsUsers" ADD CONSTRAINT "FK_597fa92dd8d4ebaede44e316179" FOREIGN KEY ("pokemonId") REFERENCES "pokemons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemonsUsers" DROP CONSTRAINT "FK_597fa92dd8d4ebaede44e316179"`);
        await queryRunner.query(`ALTER TABLE "pokemonsUsers" DROP CONSTRAINT "FK_9950a15a4d2bf490a0df9e7d1ee"`);
        await queryRunner.query(`DROP TABLE "pokemonsUsers"`);
    }

}
