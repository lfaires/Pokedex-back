import bcrypt from 'bcrypt';
import { v4 as uuid } from "uuid";
import { getRepository } from "typeorm";

import User from "../entities/User";
import Session from "../entities/Session";

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

interface UserData {
  id: number;
  email: string;
  password: string;
}

export async function createSession(password: string, user: UserData) {
  if(user && bcrypt.compareSync(password, user.password)){
    const token = uuid()
    const repository = await getRepository(Session);
    
    await repository.insert({userId: user.id, token})
    return token
  } 
  return false;
};

