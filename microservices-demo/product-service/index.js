const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
];

app.get('/products', (req, res) => {
    res.json(products);
    console.log(products);
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
        console.log(product);
    } else {
        res.status(404).send('Product not found');
    }
});

app.listen(port, () => {
    console.log(`Server is listening @ port: ${port}`);
});
