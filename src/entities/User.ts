import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import Pokemon from "./Pokemon";
import PokemonUser from "./PokemonUser";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany( () => PokemonUser, pokemonuser => pokemonuser.user)
  pokemons: Pokemon[]
}