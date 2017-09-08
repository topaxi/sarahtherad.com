import { test } from 'qunit'
import moduleForAcceptance from 'sarahtherad/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | about')

test('visiting /about', async function(assert) {
  await visit('/about')

  assert.equal(currentURL(), '/about')

  percySnapshot(assert)
})
