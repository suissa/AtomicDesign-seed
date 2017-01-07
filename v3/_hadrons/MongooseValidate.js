'use strict';

module.exports = (QuarkName) => {
  return {
    validator: require('./../_quarks/'+QuarkName)
  , message: require('./../_quarks/'+QuarkName+'Message')
  }
};