import Ember from 'ember';

export function dateFormatIso([ dateLike ]) {
  let date = dateLike instanceof Date ? dateLike : new Date(dateLike)

  return date.toISOString()
}

export default Ember.Helper.helper(dateFormatIso);
