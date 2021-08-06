import Joi from 'joi';

const signUpSchema = Joi.object({
    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .min(6)
        .required(),
    
    confirmPassword: Joi.ref('password')
})

export { signUpSchema };