import pad from 'sarahtherad/utils/pad'
import { module, test } from 'qunit'

module('Unit | Utility | pad')

test('it works', function(assert) {
  assert.equal(pad(0), '00')
  assert.equal(pad(9), '09')
  assert.equal(pad(10), '10')
  assert.equal(pad(100), '100')

  assert.equal(pad(undefined), '00')
  assert.equal(pad(null), '00')
  assert.equal(pad(NaN), '00')
  assert.equal(pad(''), '00')
  assert.equal(pad('blergh'), '00')
})
