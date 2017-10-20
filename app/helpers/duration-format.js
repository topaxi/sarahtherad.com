import { helper } from '@ember/component/helper'
import pad from '../utils/pad'

export function durationFormat([duration]) {
  let hours = Math.floor(duration / 3600)
  let minutes = Math.floor((duration - hours * 3600) / 60)
  let seconds = duration - hours * 3600 - minutes * 60

  return hours + ':' + pad(minutes) + ':' + pad(seconds)
}

export default helper(durationFormat)
