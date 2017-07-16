import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('s-article-list-radio-shows', 'Integration | Component | s article list radio shows', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{s-article-list-radio-shows}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#s-article-list-radio-shows}}
      template block text
    {{/s-article-list-radio-shows}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
