import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('json-stringify', 'helper:json-stringify', {
  integration: true,
})

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234')

  this.render(hbs`{{json-stringify inputValue}}`)

  assert.equal(
    this.$()
      .text()
      .trim(),
    '"1234"',
  )

  this.set('inputValue', { foo: 'bar' })

  this.render(hbs`{{json-stringify inputValue}}`)

  assert.equal(
    this.$()
      .text()
      .trim(),
    '{"foo":"bar"}',
  )
})
