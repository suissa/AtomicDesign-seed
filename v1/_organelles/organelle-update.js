module.exports = (Organism) => 
  (req, res) => {
    const query = {_id: req.params.id}
    const mod = req.body
    const success = require('./ribossomos/success-200-json')(res)
    const error = require('./ribossomos/error-json')(res)
    
    return Organism.update(query, mod)
                    .exec()
                    .then(success, error)
  }

