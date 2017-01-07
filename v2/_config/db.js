const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db-atomic-modules')
mongoose.Promise = require('bluebird')

const db = mongoose.connection

db.on('error', (err) => console.log('Erro de conexao.', err) )
db.on('open', () => console.log('Conexão aberta.') )
db.on('connected', (err) => console.log('Conectado') )
db.on('disconnected', (err) => console.log('Desconectado') )

module.exports = db
