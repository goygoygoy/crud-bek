//validation
const Joi = require('joi');

const register = data => {
    const Schema = Joi.object({
        nama : Joi.string()
            .min(6)
            .required(),
        email : Joi.string()
            .min(6)
            .required()
            .email(),
        password : Joi.string()
            .min(6)
            .required()
    })
    return Schema.validate(data)
}

const login = data => {
    const Schema = Joi.object({
        email : Joi.string()
            .min(6)
            .required()
            .email(),
        password : Joi.string()
            .min(6)
            .required()
    })
    return Schema.validate(data)
}

module.exports = {register,login}
