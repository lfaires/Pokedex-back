import { Response, Request } from 'express'

import * as pokemonService from "../services/pokemonService";

export async function getPokemons(req: Request, res: Response){
    const { userId } = res.locals
    const pokemons = await pokemonService.getPokemons(userId);
    res.send(pokemons)
}

export async function addPokemon(req: Request, res: Response){
    try{
        const { userId } = res.locals
        const { id } = req.params;
        const pokemonId = parseInt(id)
        await pokemonService.addPokemon(pokemonId, userId); 
        
        res.sendStatus(200)
    } catch (err){
        console.log(err)
        res.sendStatus(500)
    }
}

export async function removePokemon(req: Request, res: Response){
    try{
        const { userId } = res.locals
        const { id } = req.params;
        const pokemonId = parseInt(id)
        await pokemonService.removePokemon(pokemonId, userId);
        
        res.sendStatus(200)
    } catch (err){
        console.log(err)
        res.sendStatus(500)
    }
}