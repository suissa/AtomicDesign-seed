const CONFIG = require('./../project')

module.exports = (_file) => //console.log('_file', _file.split(CONFIG.PROJECT_PATH))
  _file
    .split(CONFIG.PROJECT_PATH)[1]
    .split('modules')[1]
    .split('config.module.routes.js')[0]
    .replace(/\//g, '')
    .replace(/\\/g, '')

