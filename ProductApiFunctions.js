const products = require('./data.json')

const findAll = () => {
    return new Promise((resolve, reject) => {
        resolve(products);
    })
}

const findById = (id) => {
    return new Promise((resolve, reject) => {
        for(let product of products) {
            if(product.id === id)
                resolve(product)
        }
    })
}

module.exports = {
    findAll, findById
}