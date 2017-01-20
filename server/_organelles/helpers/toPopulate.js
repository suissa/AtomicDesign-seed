const fs = require('fs')
const CONFIG = require('../../_config/project.js')
const ATOMS = '/_atoms/atom-'
const PATH = __filename.split(CONFIG.PROJECT_NAME + '/')[0] + CONFIG.PROJECT_NAME + ATOMS

const existsFile = (file) => fs.existsSync(file)

const toPopulate = (acc, cur) => {
  let atomConfig = PATH + cur.trim() + '-config.js'

  const addPopulate = (acc, cur) => {
    let populate = { path: cur.trim(), model: require(atomConfig)['ref'] }
    acc.push(populate)
    return acc
  }
  if ( existsFile(atomConfig) ) {
     return addPopulate(acc, cur)
  }
  else return acc
}

module.exports = toPopulate