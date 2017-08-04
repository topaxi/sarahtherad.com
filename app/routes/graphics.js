import Ember from 'ember'
import shoebox from '../utils/shoebox'

const { Route, inject } = Ember

export default Route.extend({
  menuTitle: inject.service(),

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
  },

  activate() {
    this.set('menuTitle.title', 'Graphics')
    this.set('menuTitle.route', 'graphics.index')
  },

  deactivate() {
    this.get('menuTitle').reset()
  },
})
