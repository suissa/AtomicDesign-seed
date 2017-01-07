const Schema = require('mongoose').Schema
const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false,
}

const FIELDS = {
  type: Schema.Types.ObjectId,
  ref: 'Department'
}
module.exports = Object.assign({}, DEFAULT, FIELDS)

