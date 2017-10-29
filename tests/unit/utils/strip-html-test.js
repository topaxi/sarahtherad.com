import stripHtml from 'sarahtherad/utils/strip-html'
import { module, test } from 'qunit'

module('Unit | Utility | strip html')

test('it works', function(assert) {
  assert.equal(stripHtml('<p>Something</p>'), 'Something')
  // Nested elements
  assert.equal(stripHtml('<p><a href="asfasg">Something</a></p>'), 'Something')
  // Keep html entities
  assert.equal(stripHtml('<p>&nbsp;</p>'), '&nbsp;')
  // Newlines
  assert.equal(
    stripHtml(`
    <p
    >
      <a href="asdf"
          class="someclass">
        Something
      </a>
    </p>
  `),
    'Something',
  )

  // Does not die on non-string values
  assert.equal(stripHtml(null), '')
  assert.equal(stripHtml(undefined), '')
  assert.equal(stripHtml(false), '')
  assert.equal(stripHtml(true), '')
  assert.equal(stripHtml({}), '')
  assert.equal(stripHtml([]), '')
})
