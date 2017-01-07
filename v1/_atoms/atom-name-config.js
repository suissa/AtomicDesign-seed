const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE_FACTORY_PATH: CONFIG.VALIDATE_FACTORY_PATH
}
const FIELDS = {
  type: String,
  required: true
}

module.exports = Object.assign({}, DEFAULT, FIELDS)

