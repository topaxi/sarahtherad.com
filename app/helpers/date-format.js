import { helper } from '@ember/component/helper';
import { padStart } from 'ember-pad/utils/pad'

export function dateFormat([ dateLike ]) {
  let date = dateLike instanceof Date ? dateLike : new Date(dateLike)

  return padStart(date.getDate(), 2) + '.' +
    padStart(date.getMonth() + 1, 2) + '.' +
    date.getFullYear()
}

export default helper(dateFormat);
