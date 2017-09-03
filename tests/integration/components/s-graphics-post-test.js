import { moduleForComponent, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('s-graphics-post', 'Integration | Component | s graphics post', {
  integration: true
});

skip('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{s-graphics-post}}`);

  assert.equal(this.element.textContent.trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#s-graphics-post}}
      template block text
    {{/s-graphics-post}}
  `);

  assert.equal(this.element.textContent.trim(), 'template block text');
});
