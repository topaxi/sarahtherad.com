import { test } from 'qunit'
import moduleForAcceptance from 'sarahtherad/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | graphics/post')

test('visiting /graphics/post', function(assert) {
  visit('/graphics/post')

  andThen(function() {
    assert.equal(currentURL(), '/graphics/post')

    keyEvent(window.document.documentElement, 'keypress', 27)
  })

  andThen(function() {
    assert.equal(currentURL(), '/graphics')
  })
})
