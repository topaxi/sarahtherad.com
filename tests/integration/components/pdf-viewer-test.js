import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pdf-viewer', 'Integration | Component | pdf viewer', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{pdf-viewer}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#pdf-viewer}}
      template block text
    {{/pdf-viewer}}
  `);

  assert.equal(this.$().text().trim(), '');
});

test('it works', function(assert) {
  this.render(hbs`{{pdf-viewer src="about:blank"}}`)

  assert.equal(this.$('iframe').length, 1)
  assert.equal(this.$('iframe').attr('src'), 'about:blank')
})
