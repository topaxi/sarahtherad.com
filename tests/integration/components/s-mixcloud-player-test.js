import { moduleForComponent, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('s-mixcloud-player', 'Integration | Component | s mixcloud player', {
  integration: true
});

skip('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{s-mixcloud-player}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#s-mixcloud-player}}
      template block text
    {{/s-mixcloud-player}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
