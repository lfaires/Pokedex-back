import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { getRepository } from "typeorm";

import User from "../entities/User";

export async function getUsers () {
  const users = await getRepository(User).find({
    select: ["id", "email"]
  });
  
  return users;
}

export async function findByEmail (email: string) {
  const user = await getRepository(User).find({ email });
  return user.length !== 0 ? user[0] : false;
};

export async function saveUser (email: string, password: string) {
  const hashedPassword = bcrypt.hashSync(password,10)

  const repository = await getRepository(User);
  await repository.insert({email, password: hashedPassword})

  return true;
};

export async function checkPassword(password: string, userPassword: string) {
  if(userPassword && bcrypt.compareSync(password, userPassword)){
    return true
  } 
  return false;
};
