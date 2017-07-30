import Ember from 'ember'

export function jsonStringify([ obj ]) {
  return JSON.stringify(obj)
}

export default Ember.Helper.helper(jsonStringify)
