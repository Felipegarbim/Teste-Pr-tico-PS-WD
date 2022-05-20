
const productValidationSchema = require('../validationSchema/productValidationSchema.js')


const normalizeDatabase = (dados) => {
    let newDatabase = []
    let validationErrors = []
    for (var i = 0; i < dados.length; i++) {
        newDatabase.push(normalizeProduct(dados[i], validationErrors));
    }
    return { newDatabase, validationErrors }
}


const normalizeProduct = (product, validationErrors) => {
    product.name = fixName(product, validationErrors)
    product.price = fixPrice(product, validationErrors)
    product.quantity = fixQuantity(product, validationErrors)
    return product
}


const fixName = (data, validationErrors) => {
    const { error } = productValidationSchema.productNameSchema(data.name)
    if (error)
        validationErrors.push(productValidationSchema.validationResult(data.id, error))
    const nameFixed = data.name.replace(/æ/g, 'a').replace(/¢/g, 'c').replace(/ø/g, 'o').replace(/ß/g, 'b')
    return (nameFixed)
}

const fixPrice = (data, validationErrors) => {
    const priceFixed = +Number(data.price).toFixed(2)
    const { error } = productValidationSchema.productPriceSchema(priceFixed)
    if (error)
        validationErrors.push(productValidationSchema.validationResult(data.id, error))
    return priceFixed
}

const fixQuantity = (data, validationErrors) => {
    const fixedQuantity = data.quantity == null ? 0 : data.quantity
    const { error } = productValidationSchema.productQuantitySchema(fixedQuantity)
    if (error)
        validationErrors.push(productValidationSchema.validationResult(data.id, error))
    return fixedQuantity
}

module.exports = { normalizeDatabase }

