

## Organism - Factory

```js
const createOrganelles = (element, index) => {
   if (element.includes('populate') && DNA.populate) {
     Cell[element] = require(organellesPath+'organelle-'+element)(Organism, DNA.populate)
   } else {
     Cell[element] = require(organellesPath+'organelle-'+element)(Organism)
   }
  }
```

Para:

```js
  const createOrganelles = (acc, name) => 
    Object.assign(acc, {
      [name]: require(organellesPath+name)(Organism, DNA.populate)})
```

Saímos desse:

```js
const mongoose = require('mongoose')
const moleculesPath = './../modules/'
const organellesPath = './../_organelles/'

module.exports = (organism, Molecule) => {

  const organismName = organism.name  
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

  return Cell
}
```

PARA ESSE:

```js
const mongoose = require('mongoose')
const moleculesPath = './../modules/'
const organellesPath = './../_organelles/organelle-'

module.exports = (DNA, Molecule) => {

    const Organism = mongoose.model(DNA.name, Molecule)
    const Organelles = require('./../_config/organism/organelles-default')

    let OrganellesCell = (Array.isArray(DNA.organelles))
        ? DNA.organelles.concat(Organelles)
        : Organelles

    const createOrganelles = (acc, name) => 
        Object.assign(acc, {
            [name]: require(organellesPath+name)(Organism, DNA.populate)})


    return OrganellesCell.reduce(createOrganelles, {})
}
```