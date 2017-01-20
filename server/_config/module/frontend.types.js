const validateString = (val) => console.log(val !== '')

const types = {
  'String': {
    element: 'input', 
    type: 'text',
    validate: validateString.toString()
  },
  'Number': {
    element: 'input', 
    type: 'number'
  },
  'Date': {
    element: 'input', 
    type: 'date'
  },
  'Boolean': {
    element: 'input', 
    type: 'checkbox'
  }
}

module.exports = types