import Joi from "joi";

const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
        .min(8)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%\\-_])[A-Za-z\\d!@#$%\\-_]{8,}$'))
        .required(),
});

const validateUser = (userData: any) => {
    return userSchema.validate(userData);
}

export { validateUser };