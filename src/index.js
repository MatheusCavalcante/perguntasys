const express = require('express');
const app = express();
const connection = require('../database/database');
const perguntaModel = require('../database/Pergunta');

connection
    .authenticate()
    .then(() => {
        console.log('Conexão efetuada com sucesso.')
    })
    .catch((error) => {
        console.log(error);
    });

//Informando para o express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
    const { titulo, descricao } = req.body;
    res.send(`Formulário recebido com titulo: ${titulo} e descricao: ${descricao}`);
});

app.listen(3333, () => {
    console.log('🚀 Aplicação no ar!')
});