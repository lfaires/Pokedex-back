import { Request, Response } from "express";

import * as userService from "../services/userService";

export async function getUsers (req: Request, res: Response) {
  try {
    const users = await userService.getUsers();
    res.send(users);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function signUp(req: Request, res: Response){
  try{
    const checkEmail = await userService.findByEmail(req.body.email);
    if (checkEmail) return res.sendStatus(409);

    const save = await userService.saveUser(req.body.email, req.body.password)
    res.sendStatus(201)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function signIn(req: Request, res: Response){
  try{
    //checkar email rsesponder 400
    //checkar usuario cadastrado responder 401
    //gerar token
    const token = 'token_gerado'
    res.send({ token })
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}