const MED_ABC = require('./../_config/atoms/getAtomName')(__filename)
const ATOM_CONFIG = require('./../_config/atoms/getConfigPath')(MED_ABC)
const CONFIG = require(ATOM_CONFIG)

const Atom = require('./../_factories/atom')(CONFIG)
// console.log('Atom', Atom)
module.exports = Atom
