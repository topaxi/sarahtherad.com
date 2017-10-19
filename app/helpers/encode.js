import { helper } from '@ember/component/helper'

export function encode([value]) {
  return encodeURIComponent(value)
}

export default helper(encode)
