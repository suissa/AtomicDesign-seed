const mongoose = require('mongoose')
const moleculesPath = './../modules/'
const organellesPath = './../_organelles/organelle-'

module.exports = (DNA, Molecule) => mongoose.model(DNA.name, Molecule) 