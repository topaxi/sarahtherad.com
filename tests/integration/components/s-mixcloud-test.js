import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('s-mixcloud', 'Integration | Component | s mixcloud', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{s-mixcloud}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#s-mixcloud}}
      template block text
    {{/s-mixcloud}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
