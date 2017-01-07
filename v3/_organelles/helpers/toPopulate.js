var fs = require('fs')

const existsFile = (file) => fs.existsSync(file)

let checkFileExists = s => new Promise(r=>fs.access(s, fs.F_OK, e => r(!e)))

const PATH = __filename.split('v3/')[0]+'v3/_atoms/atom-'
// map
const filterToPopulate = (field, i) => {
  let atomConfig = PATH+field.trim()+'-config.js'

  if (existsFile(atomConfig)) 
    return {  path: field.trim(), 
              model: require(atomConfig)['ref']
            }
}

module.exports = filterToPopulate