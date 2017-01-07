const CONFIG = require('./../project')

module.exports = (acc, atom) => {
  // console.log('atom', atom)
  acc[atom] = require(CONFIG.ATOMS_PATH + 'atom-' + atom)
  // console.log('acc[atom]', acc[atom])
  return Object.assign({}, acc)
}