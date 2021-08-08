import { Response, Request, NextFunction } from "express";
import { getRepository } from "typeorm";

import Session from "../entities/Session";

export async function authenticate(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers["authorization"];
    const token = authorization.split("Bearer ")[1];
   
    const repository = getRepository(Session);
    const session = await repository.findOne({ token });

    if (!session) return res.sendStatus(401);
    
    res.locals.userId = session.userId;
    next();
}