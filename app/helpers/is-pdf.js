import Ember from 'ember'

export function isPdf([ str ]) {
  return /\.pdf$/i.test(str)
}

export default Ember.Helper.helper(isPdf)
