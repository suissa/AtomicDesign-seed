'use strict'

const AtomName = 'Password'

module.exports = {
	type: String
  , set: require('./../_quarks/toEncryp')
  , validate: require('./../_hadrons/'+AtomName.toLowerCase()+'MongooseValidade')
}
