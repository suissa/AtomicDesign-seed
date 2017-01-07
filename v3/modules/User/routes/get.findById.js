const ROUTE = require('../../../_config/routes/getRouteData')(__filename)
const METHOD = ROUTE.split('.')[0]
const ACTION = ROUTE.split('.')[1]

const PATHS = require('../../../_config/routes/paths')

module.exports = (Organism) => ({
  method: METHOD,
  path: PATHS.id,
  action: Organism[ACTION]
})