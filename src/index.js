const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Bem vindo ao meu site!')
});

app.listen(3333, () => {
    console.log('🚀 Aplicação no ar!')
});