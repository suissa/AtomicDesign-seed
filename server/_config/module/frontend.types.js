const types = {
  'String': {
    element: 'input', 
    type: 'text',
    validate: (val) => val !== ''
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