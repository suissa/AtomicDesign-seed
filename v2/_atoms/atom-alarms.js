
const FIELDS_REMOVE = require('./../_config/fields-remove')
const ATOM_NAME = require('./../_config/atoms/getAtomName')(__filename)
const ATOM_CONFIG = require('./../_config/atoms/getConfigPath')(ATOM_NAME)
const CONFIG = require(ATOM_CONFIG)

// console.log('CONFIG', CONFIG)


const _atoms = Object.keys(CONFIG).filter((field) => !FIELDS_REMOVE.includes(field))

// console.log('_atoms', _atoms)

const Atom = _atoms.reduce((acc, atom) => {
  // console.log('atom', atom)
  // console.log('CONFIG atom', CONFIG[atom])
  return Object.assign(acc, { [atom]: require('./../_factories/atom')(CONFIG[atom])})
}, {})

// const Atm
// const Atom = require('./../_factories/atom')(CONFIG)
// console.log('Atom', Atom)
module.exports = Atom
