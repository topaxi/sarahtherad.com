import Ember from 'ember'

const { Route, inject } = Ember

export default Route.extend({
  headData: inject.service(),
  rad: inject.service(),
  radBackground: inject.service(),

  beforeModel() {
    this.get('radBackground').reload()
  },

  model() {
    return this.get('rad').graphics()
  },

  afterModel() {
    let publisher = 'sarahtherad.com'
    let url = `https://${publisher}/graphics/`

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@type': 'Series',
      publisher,
      url,
      name: 'Graphics'
    })
    this.set('headData.url', url)
  }
})
