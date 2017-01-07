const fs = require('fs')
const PROJECT_NAME = 'v3'
const PATH = __filename.split(PROJECT_NAME + '/')[0] + PROJECT_NAME + '/_atoms/atom-'
const existsFile = (file) => fs.existsSync(file)

const filterToPopulate = (field, i) => {
  let atomConfig = PATH + field.trim() + '-config.js'

  if (existsFile(atomConfig)) 
    return {  path: field.trim(), 
              model: require(atomConfig)['ref']
            }
}

module.exports = filterToPopulate