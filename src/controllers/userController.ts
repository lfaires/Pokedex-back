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
    const validate = await userService.validation(req.body);
    if (validate) return res.sendStatus(400);

    const checkEmail = await userService.findByEmail(req.body.email);
    if (checkEmail) return res.sendStatus(409);

    const save = await userService.saveUser(req.body.email, req.body.password)
    res.sendStatus(201)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}