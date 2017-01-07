module.exports = (Organism) => 
  (req, res) => {

    // Callbacks Promise
    const success = require('./ribossomos/success-200-json')(res)
    const error = require('./ribossomos/error-json')(res)

    const toPopulate = (field, i) => {
      let atomConfig = '../_atoms/atom-'+field.trim()+'-config'
      let ref = require(atomConfig)['ref']
      return {path: field.trim(), model: ref}
    }
    const fieldsToPopulate = req.query.entities
                              .split(',')
                              .map(toPopulate)
    // const populates = (req.query.entities)
    //                     ? req.query.entities.split(',').join(' ')
    //                     : ''
    console.log('fieldsToPopulate', fieldsToPopulate)

    const query = {_id: req.params.id}
    
    return Organism.findOne(query)
      .populate(fieldsToPopulate)
      .exec()
      .then(success)
      .catch(error)
  }

