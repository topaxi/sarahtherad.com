import Route from '@ember/routing/route';
import shoebox from '../../utils/shoebox'
import scrollTo from '../../utils/scroll-to'
import { breadcrumb } from '../../utils/structured-data'

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
      '@graph': [
        {
          '@type': 'Series',
          publisher,
          url,
          name: 'Articles',
        },
        breadcrumb([
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': url,
              name: 'Blog',
            },
          },
        ]),
      ],
    })
    this.set('headData.url', url)
  },

  activate() {
    this._super(...arguments)

    scrollTo('top', this)
  },
})
