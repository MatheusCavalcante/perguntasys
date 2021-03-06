const express = require('express');
const app = express();
const connection = require('../database/database');
const Pergunta = require('../database/Pergunta');

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
    Pergunta.findAll({
        raw: true, order: [
            ['id', 'DESC']
        ]
    }).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        });
    });
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post('/salvarpergunta', (req, res) => {
    const { titulo, descricao } = req.body;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/');
    });
});

app.get('/pergunta/:id', (req, res) => {
    const { id } = req.params;
    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta != undefined) {
            res.render('pergunta', {
                pergunta: pergunta
            });
        } else {
            res.redirect('/');
        }
    });
});

app.listen(3333, () => {
    console.log('🚀 Aplicação no ar!')
});