import { helper } from '@ember/component/helper'
import pad from '../utils/pad'

export function dateFormat([dateLike]) {
  let date =
    dateLike instanceof Date ? dateLike : new Date(Date.parse(dateLike))

  return (
    pad(date.getDate()) +
    '.' +
    pad(date.getMonth() + 1) +
    '.' +
    date.getFullYear()
  )
}

export default helper(dateFormat)
