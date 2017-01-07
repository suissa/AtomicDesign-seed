const filterToPopulate = require('./helpers/filterToPopulate')

module.exports = (Organism) => 
  (req, res) => {
    // Callbacks Promise
    const success = require('./ribossomos/success-200-json')(res)
    const error = require('./ribossomos/error-json')(res)

    const fieldsToPopulate = req.query
                                .entities
                                .split(',')
                                .filter(filterToPopulate)

    const query = {_id: req.params.id}
    console.log('fieldsToPopulate', fieldsToPopulate)
    return Organism.findOne(query)
      .populate(fieldsToPopulate)
      .exec()
      .then(success)
      .catch(error)
  }

