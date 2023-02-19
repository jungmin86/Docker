const express = require('express');

const PORT = 8080;
// const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('geng');
});

app.listen(PORT);
console.log(`Running on PORT:${PORT}`);