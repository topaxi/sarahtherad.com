import { helper } from '@ember/component/helper'

const isIE =
  typeof FastBoot === 'undefined' && /Trident/i.test(navigator.userAgent)

export function dateFormatIso([dateLike]) {
  let date = dateLike instanceof Date ? dateLike : parseDate(dateLike)

  return date.toISOString()
}

function parseDate(dateLike) {
  if (!isIE || typeof dateLike !== 'string') {
    return new Date(dateLike)
  }

  let [
    _match,
    datetime,
    sign,
    hours,
    minutes,
  ] = /(.*?)([+-])(\d{2})(\d{2})$/.exec(dateLike)
  let date = new Date(datetime)
  // If we're ahead of time, we need to subtract
  let multi = sign === '+' ? -1 : 1
  date.setHours(date.getHours() + parseInt(hours, 10) * multi)
  date.setMinutes(date.getMinutes() + parseInt(minutes, 10) * multi)
  return date
}

export default helper(dateFormatIso)
