import Ember from 'ember'
import shoebox from '../utils/shoebox'

const { Route } = Ember

export default Route.extend({
  beforeModel() {
    this.radBackground.reload()
  },

  @shoebox
  model() {
    return this.rad.graphics()
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
