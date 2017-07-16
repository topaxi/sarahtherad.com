import Ember from 'ember';

export function encode(params/*, hash*/) {
  return encodeURIComponent(params[0]);
}

export default Ember.Helper.helper(encode);
