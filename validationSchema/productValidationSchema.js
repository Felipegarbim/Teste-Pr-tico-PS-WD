const Joi = require('joi')

const validationResult = (productId, error) => {
        return (`${productId} - Faild in validation - ${error.details.map(e => e.message).join(" | ")}`)
}

const productNameSchema = (name) => {
        return Joi.object().keys({ Name: Joi.string().required() }).validate({ Name: name })
}

const productPriceSchema = (price) => {
        return Joi.object().keys({ Price: Joi.number().required().precision(2).positive() }).validate({ Price: price })
}
const productQuantitySchema = (quantity) => {
        return Joi.object().keys({ Quantity: Joi.number().required().integer() }).validate({ Quantity: quantity })
}

module.exports = { validationResult, productNameSchema, productPriceSchema, productQuantitySchema}
