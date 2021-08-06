import Joi from 'joi';

const userSchema = Joi.object({
    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .min(6)
        .required(),
    
    confirmPassword: Joi.ref('password')
})

export { userSchema };