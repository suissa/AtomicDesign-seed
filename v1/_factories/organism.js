const mongoose = require('mongoose')
const moleculesPath = './../modules/'
const organellesPath = './../_organelles/'

module.exports = (organism, Molecule) => {

	// console.log('organism', organism)
	// console.log('Molecule', Molecule)

	const organismName = organism.name	
	// console.log('organismName', organismName)
	const Organism = mongoose.model(organismName, Molecule) // deixar generico

	let Cell = {}
	const Organelles = require('./../_config/organelles-default')

	if (Array.isArray(organism.organelles))
		organism.organelles.forEach((element, index) => Organelles.push(element))

	const createOrganelles = (element, index) => {
		if (element.includes('populate') && organism.populate) {
			Cell[element] = require(organellesPath+'organelle-'+element)(Organism, organism.populate)
		} else {
			Cell[element] = require(organellesPath+'organelle-'+element)(Organism)
		}
	}

	Organelles.forEach(createOrganelles)
	// console.log('Cell', Cell)
	return Cell
}
