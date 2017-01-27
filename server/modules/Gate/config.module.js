const name = require('./../../_config/module/get.name')(__filename)
const molecule = {
  structure: require('./molecular.structure')
}

module.exports = (organelles) => {
  const organism = { name, organelles }
  const DNA = { organism, molecule }
  
  return require('./../../_factories/module')(DNA)
}