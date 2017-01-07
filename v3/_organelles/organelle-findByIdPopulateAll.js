module.exports = (Organism) => 
  (req, res) => {
    const query = {_id: req.params.id}
    const populates = req.query.entities.split(',').join(' ')
    const success = require('./ribossomos/success-200-json')(res)
    const error = require('./ribossomos/error-json')(res)
    console.log('populate', populates)
    return Organism.findOne(query)
      .populate(populates)
      .exec()
      .then(success, error)
  }

