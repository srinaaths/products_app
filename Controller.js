const Product = require('./ProductApiFunctions')
const products = require('./data.json')

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error);
    }
}

const getProductById = async (req, res, id) => {
    try {
        const product = await Product.findById(id);
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(product))
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getProducts, getProductById}