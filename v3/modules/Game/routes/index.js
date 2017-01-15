module.exports = (Organism) => {
  const createRouteConfig = require(factory + 'routeConfig')(Organism)
  console.log('routes.map(createRouteConfig)', routes.map(createRouteConfig))
  return routes.map(createRouteConfig)
}

const routes = [
  { path: '/', 
    method: 'get', action: 'find' },
  { path: '/', 
    method: 'post', action: 'create' },
  { path: '/filter', 
    method: 'get', action: 'findByFilter' },
  { path: '/badges/:badge', 
    method: 'get', action: 'findBadges' },
  { path: '/populate', 
    method: 'get', action: 'findAllPopulate' },
  { path: '/:id', 
    method: 'get', action: 'findById' },
  { path: '/:id/populate', 
    method: 'get', action: 'findByIdPopulate' },
  { path: '/:id', 
    method: 'put', action: 'update' },
  { path: '/:id', 
    method: 'delete', action: 'remove' },
]

const factory = '../../../_factories/'