import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import PokemonUser from "./PokemonUser";
import User from "./User";

@Entity('pokemons')
export default class Pokemon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('integer')
    number: number;

    @Column('text')
    image: string;

    @Column('integer')
    height: number;

    @Column('integer')
    weight: number;

    @Column('integer')
    baseExp: number;

    @Column('text')
    description: string;

    @OneToMany( () => PokemonUser, pokemonUser => pokemonUser.pokemon)
    pokemonUsers: PokemonUser[]
}