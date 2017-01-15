module.exports = (routes, Organism) => {
  // console.log('routes', routes)
  // console.log('Organism', Organism)
  const createRouteConfig = require(factory + 'routeConfig')(Organism)
  
  // console.log('routes.map(createRouteConfig)', 
  //   routes.map(createRouteConfig)[0].action)
  return routes.map(createRouteConfig)
}

const factory = '../../../_factories/'

