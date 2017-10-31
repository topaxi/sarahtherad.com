import { test } from 'qunit'
import moduleForAcceptance from 'sarahtherad/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | graphics/post')

test('ESC returns to /graphics', async function(assert) {
  await visit('/graphics/post')

  assert.equal(currentURL(), '/graphics/post')

  await keyEvent(window.document.documentElement, 'keypress', 27)

  assert.equal(currentURL(), '/graphics')
})

test('Close button returns to /graphics', async function(assert) {
  await visit('/graphics/post')

  await click('[test-graphics-post-close]')

  assert.equal(currentURL(), '/graphics')
})
