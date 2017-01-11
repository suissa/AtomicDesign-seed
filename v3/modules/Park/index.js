const organelles = [
  // 'findByFilter',
  // 'findByIdPopulate',
  // 'findAllPopulate'
]

const MODULE = require('./config.module')(organelles)
const CONFIG = require('./config')
  
const _router = require('./routes/' + CONFIG.ROUTER)
const Routes = require('./routes/')(MODULE.organism)
const Router = require('./routes/' + CONFIG.ROUTES)(Routes, _router)

module.exports = Router
