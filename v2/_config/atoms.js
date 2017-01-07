const VALIDATE_TYPE = 'Mongoose'
const VALIDATE_FACTORY = 'factory' +VALIDATE_TYPE+ 'Validate'
const VALIDATE_FACTORY_PATH = './../_hadrons/' + VALIDATE_FACTORY

module.exports = (_file) => {
  const ATOM_NAME = _file
                    .split('atom-')[1]
                    .split('-config.js')[0]
                    .toLowerCase()
  // console.log('_file', _file)     
  // console.log('return', {
  //   ATOM_NAME,
  //   VALIDATE_FACTORY_PATH
  // })                  
  return {
    ATOM_NAME,
    VALIDATE_FACTORY_PATH
  }
}