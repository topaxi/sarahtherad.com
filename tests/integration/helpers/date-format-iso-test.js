
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('date-format-iso', 'helper:date-format-iso', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{date-format-iso inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

