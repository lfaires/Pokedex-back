import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Pokemon from "./Pokemon";
import User from "./User";

@Entity('pokemonsUsers')
export default class PokemonUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: true})
    inMyPokemons: boolean;

    @Column()
    userId: number;

    @Column()
    pokemonId: number;
    
    @ManyToOne( () => User, user => user.pokemons)
    user: User;  

    @ManyToOne( () => Pokemon, pokemon => pokemon.pokemonUsers)
    pokemon: Pokemon;
}