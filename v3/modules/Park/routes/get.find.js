const ROUTE = require('../../../_config/routes/getRouteData')(__filename)
const METHOD = ROUTE.split('.')[0]
const ACTION = ROUTE.split('.')[1]
const PATHS = require('./paths')

module.exports = (Organism) => ({
  method: METHOD,
  path: PATHS.base,
  action: Organism[ACTION]
})