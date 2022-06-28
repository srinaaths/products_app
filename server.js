const http = require('http')
const data = require('./data.json')
const {getProducts, getProductById} = require('./Controller.js')

const server = http.createServer((req, res) => {
    if(req.url === '/products' && req.method === 'GET') {
        getProducts(req, res);
    }
    else if(req.url.match(/\/product\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[2];
        getProductById(req, res, id);
    }
    else if(req.url === '/addProduct'){
        console.log(JSON.stringify(req.body));
        res.end(JSON.stringify(req.body));
    }
    else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({'message': 'not found'}))
    }
})





server.listen(8081, () => console.log('listening to port 8081'))