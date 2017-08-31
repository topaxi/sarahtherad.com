import Route from '@ember/routing/route';
import shoebox from '../../utils/shoebox'

export default Route.extend({
  beforeModel() {
    this.radBackground.reload()
  },

  @shoebox
  model() {
    return this.rad.posts()
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
