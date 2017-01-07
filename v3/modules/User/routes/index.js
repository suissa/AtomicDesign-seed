module.exports = (Organism) => ([
  require('./get.find')(Organism),
  require('./get.findById')(Organism),
  require('./put.update')(Organism),
  require('./delete.remove')(Organism),
  require('./post.create')(Organism)
])