const TYPES = require('./../_config/module/frontend.types.js')

module.exports = (Organism) => 
  (req, res) => {
    const removeUnderlineFields = (el) => !el.includes('_')
    const fromSchemaToComponent = (el, i) => 
      ({ type: Organism.schema.paths[el].instance,
        name: el
      })
    const translateToComponent = (el, i) => 
      (TYPES[el.type])
        ? Object.assign({name: el.name }, TYPES[el.type])
        : Object.assign({name: el.name }, TYPES['String'])

    const schema = Object
                    .keys(Organism.schema.paths)
                    .filter(removeUnderlineFields)
                    .map(fromSchemaToComponent)
                    .map(translateToComponent)
                    console.log('schema', schema)
    return res.send(schema)
  }