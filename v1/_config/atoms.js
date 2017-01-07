const VALIDATE_TYPE = 'Mongoose'
const VALIDATE_FACTORY = 'factory' +VALIDATE_TYPE+ 'Validate'
const VALIDATE_FACTORY_PATH = './../_hadrons/' + VALIDATE_FACTORY

module.exports = (_file) => {
  // console.log('_file.split(atom-)', _file.split('atom-')[1])
  // console.log('_file.split(config.js)', _file.split('atom-')[1].split('-config.js')[0])
  const ATOM_NAME = _file
                    .split('atom-')[1]
                    .split('-config.js')[0]
                    .toLowerCase()
  // console.log('ATOM_NAME', ATOM_NAME)
                            
  return {
    ATOM_NAME,
    VALIDATE_FACTORY_PATH
  }
}