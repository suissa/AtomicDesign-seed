const fs = require('fs')

const PATH = __filename.split('v3/')[0]+'v3/_atoms/atom-'
const existsFile = (file) => fs.existsSync(file)

// map
const filterToPopulate = (field, i) => {
  let atomConfig = PATH + field.trim() + '-config.js'

  if (existsFile(atomConfig)) 
    return {  path: field.trim(), 
              model: require(atomConfig)['ref']
            }
}

module.exports = filterToPopulate