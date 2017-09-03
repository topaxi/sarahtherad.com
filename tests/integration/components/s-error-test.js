import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('s-error', 'Integration | Component | s error', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{s-error}}`);

  assert.ok(this.element.textContent.includes('Unknown error'))
  assert.equal(
    this.element.querySelector('a').textContent.trim(),
    'Back to saratherad.com'
  )
  assert.equal(this.element.querySelector('a').href, '/')
});
