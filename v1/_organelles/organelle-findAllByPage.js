// const callback = require('./organelle-response-200-json');


module.exports = (Organism) => 
  (req, res) => {
    const error = (err) => res.json(err)
    const query = {};
    const limit = 20
    const page = (req.params.page) ? req.params.page : 0
    if (isNaN(page)) {

      const isOK = (data) => res.json(data)
      return Organism.findOne({_id: page})
        .populate('calibracoes')
        .populate('empresa')
        .exec()
        .then(isOK)
        .catch(error)
    }
    const skip = limit * parseInt(page)

    const success = (data) =>
      Organism.find(query).count((err, total) => {
        const pages = (total <= 20) ? 1 : Math.floor(total / limit)
        data.push({pages, page})
        return res.json(data)
      })

    Organism.find(query)
      .limit(limit)
      .skip(skip)
      .exec()
      .then(success)
      .catch(error)
  }

