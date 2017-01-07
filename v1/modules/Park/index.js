const CONFIG = require('./config')
const MODULE = require('./config.module')

const _router = require('./routes/' + CONFIG.ROUTER)
const Routes = require('./routes/')(MODULE.organism)
const Router = require('./routes/' + CONFIG.ROUTES)(Routes, _router)

module.exports = Router
