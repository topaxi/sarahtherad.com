import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('s-close', 'Integration | Component | s close', {
  integration: true,
})

test('it renders', function(assert) {
  this.render(hbs`{{s-close}}`)

  assert.equal(this.$('svg').length, 1)
})
