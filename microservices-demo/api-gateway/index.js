const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:3001/users`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(`Error fetching <h1>users</h1>`);
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:3001/users/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(`Error fetching <h1>user</h1>`)
    }
});

app.get('/products', async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:3002/products`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(`Error fetching <h1>products</h1>`)
    }
});

app.get('/products/:id', async (req, res) => {
        try {
            const response = await axios.get(`http://localhost:3002/products/${req.params.id}`);
            res.json(response.data);
        } catch (error) {
            res.status(500).send(`Error fetching <h1>product</h1>`);
        }
});

app.listen(port, () => {
    console.log(`Server is listening @ port: ${port}`);
});