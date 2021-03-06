const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false,
  ARRAY: true
}
const PROPS = {
  type: String,
  lowercase: true
  // Array de devices
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

module.exports = require('./../_factories/atom')(atomConfig)
