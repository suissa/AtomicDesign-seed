const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false,
  labels: {
    'pt-br': 'nome',
    'en': 'name',
  }
}
const PROPS = {
  type: String,
  // required: true
  enum: ['ouro', 'prata', 'bronze']
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

module.exports = require('./../_factories/atom')(atomConfig)
