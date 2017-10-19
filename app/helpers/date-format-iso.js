import { helper } from '@ember/component/helper'

export function dateFormatIso([dateLike]) {
  let date = dateLike instanceof Date ? dateLike : new Date(dateLike)

  return date.toISOString()
}

export default helper(dateFormatIso)
