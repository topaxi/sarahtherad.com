import { moduleForComponent, skip } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent(
  's-article-list-posts',
  'Integration | Component | s article list posts',
  {
    integration: true,
  },
)

skip('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{s-article-list-posts}}`)

  assert.equal(
    this.$()
      .text()
      .trim(),
    '',
  )

  // Template block usage:
  this.render(hbs`
    {{#s-article-list-posts}}
      template block text
    {{/s-article-list-posts}}
  `)

  assert.equal(
    this.$()
      .text()
      .trim(),
    'template block text',
  )
})
