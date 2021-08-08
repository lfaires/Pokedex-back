import { getRepository } from "typeorm";

import Pokemon from "../entities/Pokemon";
import PokemonUser from "../entities/PokemonUser";

export async function getPokemons(id: number) {
    const repository = await getRepository(Pokemon)
    const result = await repository.find({
        relations: ["pokemonUsers"]
    });

    const pokemons = result.map(i => {
        return {
            id: i.id,
            name: i.name,
            number: i.number,
            image: i.image,
            weight: i.weight,
            height: i.height,
            baseExp: i.baseExp,
            description: i.description,
            inMyPokemons: i.pokemonUsers.filter(e => e.userId === id).map(e=> e.inMyPokemons)[0] || false}
    })
    
    return pokemons;
};

export async function addPokemon(pokemonId: number, userId: number) {
    const repository = await getRepository(PokemonUser);
    const pokemon = await repository.find({pokemonId, userId})
    if (pokemon.length === 0){
        await repository.insert({pokemonId, userId})
    } else {
        await repository.update({id: pokemon[0].id},{inMyPokemons:true})
    }
};

export async function removePokemon(pokemonId: number, userId: number) {
    const repository = await getRepository(PokemonUser);
    const pokemon = await repository.find({pokemonId, userId})
    await repository.update({id: pokemon[0].id},{inMyPokemons: false})
};