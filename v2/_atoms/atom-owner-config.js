const Schema = require('mongoose').Schema
const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false,
  // COMPOSE: true,
  ARRAY: true
}

const PROPS = {
  type: Schema.Types.ObjectId,
  ref: 'User'
}
module.exports = Object.assign({}, DEFAULT, PROPS)

