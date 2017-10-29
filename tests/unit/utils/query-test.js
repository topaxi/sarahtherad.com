import query from 'sarahtherad/utils/query'
import { module, test } from 'qunit'

module('Unit | Utility | query')

test('it works', function(assert) {
  assert.equal(query({}), '')
  assert.equal(query({ foo: 'bar' }), '?foo=bar')
  assert.equal(query({ foo: 'bar', baz: 'qux' }), '?foo=bar&baz=qux')
})
