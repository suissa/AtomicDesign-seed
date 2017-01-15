const CONFIG = require('./config')
const ROUTER_PATH = './routes/'
const routesConfig = require('./routes.config.js')
const ROUTES = require('./config.module.routes')(routesConfig)

const ROUTER = require(ROUTER_PATH + CONFIG.ROUTER)
const MODULE_ROUTER = require(ROUTER_PATH + CONFIG.ROUTES)(ROUTES, ROUTER)

module.exports = MODULE_ROUTER
