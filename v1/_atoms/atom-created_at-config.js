const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false
}
const FIELDS = {
  type: Date,
  default: Date.now 
}
module.exports = Object.assign({}, DEFAULT, FIELDS)

