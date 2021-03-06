const sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('pergunta', {
    titulo: {
        type: sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({ force: false }).then(() => {
    console.log('Tabela "pessoa" criada.');
});

module.exports = Pergunta;