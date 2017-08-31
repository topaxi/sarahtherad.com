import { helper } from '@ember/component/helper';

export function encode(params/*, hash*/) {
  return encodeURIComponent(params[0]);
}

export default helper(encode);
