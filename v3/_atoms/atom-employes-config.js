const Schema = require('mongoose').Schema
const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false,
  ARRAY: true
  // COMPOSE: true,
}

const PROPS = {
  type: Schema.Types.ObjectId,
  ref: 'User'
}
console.log('DEFAULT', DEFAULT)
const atomConfig = Object.assign({}, DEFAULT, PROPS)

console.log('atomConfig', atomConfig)
const Atom = require('./../_factories/atom')(atomConfig)
module.exports = Atom

