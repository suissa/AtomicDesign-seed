const mongoose = require('./_config/db')
global.mongoose = mongoose
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const compress = require('compression')
const favicon = require('serve-favicon')
const modules = require('./getModules')('./modules/')
const api = {}

app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(compress()) // Compress response data with gzip
  // app.use(favicon(__dirname + '/favicon.ico'))

/* Cria as rotas dinamicamente a partir dos módulos */
const getRoutes = require('./_config/routes/getRoutes')
const createRoutes = require('./_config/routes/createRoutes')(app)

modules
.map(getRoutes)
.reduce(createRoutes, app)

app.get('/ping', (req, res, next) => res.send('pong') )

app.listen(port, () => {
  console.log('---------------------------------------------------------------------------')
  console.log('Express server listening on port ' + port)
  console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd())
  console.log('---------------------------------------------------------------------------')
})
