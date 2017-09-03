
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('is-pdf', 'helper:is-pdf', {
  integration: true
});

test('it works', function(assert) {
  this.set('inputValue', '1234pdf');

  this.render(hbs`{{is-pdf inputValue}}`);

  assert.equal(this.element.textContent.trim(), 'false');

  this.set('inputValue', '1234.pdf');

  this.render(hbs`{{is-pdf inputValue}}`);

  assert.equal(this.element.textContent.trim(), 'true');
});
