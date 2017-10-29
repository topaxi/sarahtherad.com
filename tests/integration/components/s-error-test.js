import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('s-error', 'Integration | Component | s error', {
  integration: true,
})

test('it renders', function(assert) {
  this.render(hbs`{{s-error}}`)

  assert.ok(
    this.$()
      .text()
      .includes('Unknown error'),
  )
  assert.ok(
    this.$('a')
      .text()
      .trim(),
    'Back to saratherad.com',
  )
  assert.ok(this.$('a').prop('href'), '/')
})
