import Route from '@ember/routing/route'
import scrollTo from '../utils/scroll-to'

import { organization, sarah, breadcrumb } from '../utils/structured-data'

export default Route.extend({
  model() {
    return this.radBackground.reload({
      url: '/assets/pictures/about-background.jpeg',
      color: '#fff',
    })
  },

  afterModel() {
    let url = 'https://sarahtherad.com/about'

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@graph': [
        organization,
        sarah,
        breadcrumb([
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': url,
              name: 'About',
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
