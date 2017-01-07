module.exports = (Organism) => 
  (req, res) => {

    const toPopulate = (field, i) => {
      let ref = require('../_atoms/atom-'+field.trim()+'-config')['ref']
      return {path: field.trim(), model: ref}
      // console.log()
    }
    const fieldsToPopulate = req.query.entities.split(',')
                                                .map(toPopulate)
    const query = {_id: req.params.id}
    const populates = (req.query.entities)
                        ? req.query.entities.split(',').join(' ')
                        : ''
    const success = require('./ribossomos/success-200-json')(res)
    const error = require('./ribossomos/error-json')(res)
    console.log('fieldsToPopulate', fieldsToPopulate)

    return Organism.findOne(query)
      .populate(fieldsToPopulate)
      .exec()
      .then(success)
      .catch(error)
  }

