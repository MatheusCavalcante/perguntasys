const sequelize = require('sequelize');

const connection = new sequelize('guiaperguntas', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;