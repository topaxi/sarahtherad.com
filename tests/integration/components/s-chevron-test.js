import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('s-chevron', 'Integration | Component | s chevron', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{s-chevron}}`)

  assert.equal(this.$('svg').length, 1)
})
