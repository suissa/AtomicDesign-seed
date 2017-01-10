const CONFIG_PATH = '../../../_config/routes/'
const PATHS = require(CONFIG_PATH + 'paths')
const ROUTE = require(CONFIG_PATH + 'getRouteData')(__filename)

module.exports = (Organism) => ({
  path: PATHS[ROUTE[0]],
  method: ROUTE[1],
  action: Organism[ROUTE[2]]
})