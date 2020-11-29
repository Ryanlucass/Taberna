// importar dependência
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express
const server = express()
server
//utilizar body do req
.use(express.urlencoded({ extended: true }))
//utilizando os arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine','hbs')



//rotas da aplicação
.get('/', pages.index)
.get('/bestplaces', pages.bestplaces)
.get('/gamerhouse', pages.gamerhouse)
.get('/create-gamerhouse', pages.createGamerhouse)
.post('/save-gamerhouse', pages.saveGamerhouse)

//ligar o servidor 
server.listen(5500)