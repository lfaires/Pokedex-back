import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as userController from "./controllers/userController";
import * as pokemonController from "./controllers/pokemonController";
import { authenticate } from "./middlewares/authenticate";
import { userValidation } from "./middlewares/userValidation"

const app = express();
app.use(cors());
app.use(express.json());

app.post('/sign-up',userValidation, userController.signUp);
app.post('/sign-in', userController.signIn);
app.get('/pokemons', authenticate, pokemonController.getPokemons);
app.post('/my-pokemons/:id/add', authenticate, pokemonController.addPokemon);
app.post('/my-pokemons/:id/remove', authenticate, pokemonController.removePokemon);

export async function init () {
  await connectDatabase();
}

export default app;