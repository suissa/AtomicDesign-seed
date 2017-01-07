module.exports = (Organism, populate) => 
  (req, res) => {
    const query = {_id: req.params.id}
    const success = require('./ribossomos/success-200-json')(res)
    const error = require('./ribossomos/error-json')(res)
    console.log('populate', populate)
    return Organism.findOne(query)
      .populate(populate)
      .exec()
      .then(success, error)
  }

