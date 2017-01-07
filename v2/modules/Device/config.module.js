const name = require('./../../_config/module/getName')(__filename)
const organelles = ['findById-populate']

const molecule = {
  structure: require('./molecular.structure')
}
const organism = { 
  name,
  organelles,
  populate: {path: 'department', model: 'Department'}
}

const DNA = {
	organism,
  molecule
}
const Cell = require('./../../_factories/module')(DNA)
// console.log('Cell.organism', Cell.organism)
module.exports = Cell
