import { test } from 'qunit'
import moduleForAcceptance from 'sarahtherad/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | radio show')

test('visiting /radio-show', async function(assert) {
  await visit('/radio-show')

  assert.equal(currentURL(), '/radio-show')

  percySnapshot(assert, {
    breakpoints: ['mobile', 'mobile-high', 'desktop']
  })
})
