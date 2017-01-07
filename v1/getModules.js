const fs = require('fs')
const path = require('path')

module.exports = (MODULES_PATH) => 
  fs.readdirSync(MODULES_PATH)
    .filter( (file) =>  fs.statSync(path.join(MODULES_PATH, file))
                          .isDirectory())