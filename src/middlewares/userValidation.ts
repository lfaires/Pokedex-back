import { Request, Response, NextFunction } from 'express';
import { userSchema } from '../schemas/userSchema'

interface UserInfo {
    email: string;
    password: string;
    confirmPassword: string;
}

export async function userValidation (req: Request, res: Response, next: NextFunction) {
    const { email, password, confirmPassword } = req.body as UserInfo
    const validate = userSchema.validate({email, password, confirmPassword}).error

    if (validate) return res.sendStatus(400);

    next();
};