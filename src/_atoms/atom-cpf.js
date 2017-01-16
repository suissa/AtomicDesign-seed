
'use strict'

const AtomName = 'CPF';

module.exports = {
  type: String
, validate: require('./../_hadrons/'+AtomName.toLowerCase()+'MongooseValidate')
, default: '04864713901'
}
