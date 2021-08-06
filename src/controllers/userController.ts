import { v4 as uuid } from "uuid";
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

interface Login {
  email: string;
  password: string;
}

export async function signIn(req: Request, res: Response){
  try{
    const { email, password } = req.body as Login;

    const user = await userService.findByEmail(email);
    if (!user) return res.sendStatus(400);
    
    const checkPassword = await userService.checkPassword(password, user.password);
    if (!checkPassword) return res.sendStatus(401);
   
    const token = uuid();
    res.send(token)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}