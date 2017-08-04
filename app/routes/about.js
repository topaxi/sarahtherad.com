import Ember from 'ember'

const { Route } = Ember

export default Route.extend({
  afterModel() {
    let publisher = 'sarahtherad.com'
    let url = `https://${publisher}/about`

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@type': 'Person',
      'sameAs': 'https://twitter.com/sarah_therad'
      publisher,
      url,
    })
    this.set('headData.url', url)

    return this.radBackground.clear()
  },
})
