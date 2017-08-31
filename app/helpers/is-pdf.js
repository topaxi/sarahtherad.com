import { helper } from '@ember/component/helper';

export function isPdf([ str ]) {
  return /\.pdf$/i.test(str)
}

export default helper(isPdf)
