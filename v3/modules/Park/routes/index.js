module.exports = (routes, Organism) => {
  const createRouteConfig = require(factory + 'routeConfig')(Organism)
  return routes.map(createRouteConfig)
}

const factory = '../../../_factories/'

