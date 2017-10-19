import { helper } from '@ember/component/helper'

export function jsonStringify([obj]) {
  return JSON.stringify(obj)
}

export default helper(jsonStringify)
