const name = require('./../../_config/module/getName')(__filename)

const molecule = {
  structure: require('./molecular.structure')
}
const organelles = [
  'findAllByPage',
  'findByFilters'
]

const organism = { name, organelles }
const DNA = { organism, molecule}

const Cell = require('./../../_factories/module')(DNA)

module.exports = Cell
