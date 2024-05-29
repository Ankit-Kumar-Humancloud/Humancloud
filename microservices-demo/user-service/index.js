const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const users = [
    { id: 1, name: 'Ankit' },
    { id: 2, name: 'Kumar' },
];

app.get('/users', (req, res) => {
    res.json(users);
    console.log(users);
});

app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
        console.log(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(port, () => {
    console.log(`Server is listening @ port: ${port}`);
});
