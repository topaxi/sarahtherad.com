
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('date-format-iso', 'helper:date-format-iso', {
  integration: true
});

test('it renders', function(assert) {
  this.set('inputValue', '2017-07-01T12:23:45+0200');

  this.render(hbs`{{date-format-iso inputValue}}`);

  assert.equal(this.$().text().trim(), '2017-07-01T10:23:45.000Z');
});

