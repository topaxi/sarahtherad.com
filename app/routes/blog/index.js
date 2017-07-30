import Ember from 'ember';

const { Route, inject } = Ember

export default Route.extend({
  headData: inject.service(),
  rad: inject.service(),
  radBackground: inject.service(),

  beforeModel() {
    this.get('radBackground').reload()
  },

  model() {
    return this.get('rad').posts()
  },

  afterModel() {
    let publisher = 'sarahtherad.com'
    let url = `https://${publisher}/blog/`

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@type': 'Series',
      publisher,
      url,
      name: 'Articles'
    })
    this.set('headData.url', url)
  }
})
