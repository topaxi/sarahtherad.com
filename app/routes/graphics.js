import { inject as service } from '@ember/service'
import Route from '@ember/routing/route'
import shoebox from '../utils/shoebox'
import scrollTo from '../utils/scroll-to'
import { breadcrumb } from '../utils/structured-data'

export default Route.extend({
  menuTitle: service(),

  beforeModel() {
    this.radBackground.reload()
  },

  @shoebox
  prefetch() {
    return this.rad.graphics()
  },

  afterModel() {
    let publisher = 'sarahtherad.com'
    let url = `https://${publisher}/graphics/`

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'Series',
          publisher,
          url,
          name: 'Graphics',
        },
        breadcrumb([
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': 'https://sarahtherad.com/graphics/',
              name: 'Graphics',
            },
          },
        ]),
      ],
    })
    this.set('headData.url', url)
  },

  activate() {
    this.set('menuTitle.title', 'Graphics')
    this.set('menuTitle.route', 'graphics.index')

    scrollTo('top', this)
  },

  deactivate() {
    this.get('menuTitle').reset()
  },
})
