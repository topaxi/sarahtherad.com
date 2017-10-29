import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

export default function hasPdfjs() {
  return (
    (/Firefox/.test(navigator.userAgent) || navigator.chrome) &&
    !/Android/.test(navigator.userAgent) &&
    !/iPad|iPhone/.test(navigator.userAgent)
  )
}

moduleForComponent('pdf-viewer', 'Integration | Component | pdf viewer', {
  integration: true,
})

test('it renders', function(assert) {
  this.render(hbs`{{pdf-viewer}}`)

  assert.equal(
    this.$()
      .text()
      .trim(),
    '',
  )

  this.render(hbs`
    {{#pdf-viewer}}
      template block text
    {{/pdf-viewer}}
  `)

  assert.equal(
    this.$()
      .text()
      .trim(),
    '',
  )
})

test('it works', function(assert) {
  this.render(hbs`{{pdf-viewer src="about:blank"}}`)

  let url = hasPdfjs()
    ? 'about:blank'
    : 'https://docs.google.com/viewer?url=about%3Ablank&embedded=true'

  assert.equal(this.$('iframe').length, 1)
  assert.equal(this.$('iframe').attr('src'), url)
})
