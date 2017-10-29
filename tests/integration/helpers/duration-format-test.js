import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('duration-format', 'helper:duration-format', {
  integration: true,
})

test('it renders', function(assert) {
  this.set('inputValue', '1234')

  this.render(hbs`{{duration-format inputValue}}`)

  assert.equal(
    this.$()
      .text()
      .trim(),
    '0:20:34',
  )
})
