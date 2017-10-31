import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('date-format', 'helper:date-format', {
  integration: true,
})

test('it renders', function(assert) {
  this.set('inputValue', '2017-07-01T12:23:45+02:00')

  this.render(hbs`{{date-format inputValue}}`)

  assert.equal(
    this.$()
      .text()
      .trim(),
    '01.07.2017',
  )
})
