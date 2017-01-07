const AtomName = 'Perfil';

module.exports = {
	type: String
, set: require('./../_quarks/toLower')
, validate: require('./../_hadrons/'+AtomName.toLowerCase()+'MongooseValidade')
}
