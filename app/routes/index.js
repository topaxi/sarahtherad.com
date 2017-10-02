import Route from '@ember/routing/route';
import fetch from 'fetch'
import RSVP from 'rsvp'
import shoebox from '../utils/shoebox'
import scrollTo from '../utils/scroll-to'

import {
  organization,
  sarah,
  breadcrumb,
} from '../utils/structured-data'

const { Promise } = RSVP

export default Route.extend({
  beforeModel() {
    this.radBackground.reload()
  },

  @shoebox
  model() {
    return Promise.all([
      Promise.race([
        fetch('https://api.mixcloud.com/derdienstagmorgen/cloudcasts/')
          .then(res => res.json())
          .then(casts => casts.data[Math.round(Math.random() * casts.data.length)])
          .then(cast => Object.assign({ type: 'radio-shows' }, cast))
          .catch(_err => null),
        new Promise(resolve => setTimeout(resolve, 500)),
      ]),
      this.rad.home(),
    ])
      .then(([ cast, radHome ]) =>
        cast ? [ cast, ...radHome.data ] : radHome.data
      )
  },

  afterModel() {
    let description =
      'This is Sarah, founder of Christener Graphics & Communications. ' +
      'You\'ll find a collection of my graphic artworks, recordings from ' +
      'my radio show, as well as some other shiny stuff about my life on ' +
      'this little website of mine.'

    let publisher = 'sarahtherad.com'
    let url = `https://${publisher}/`

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'Website',
          publisher,
          url,
          description,
        },
        organization,
        sarah,
        breadcrumb(),
      ],
    })
    this.set('headData.url', url)
    this.set('headData.description', description)
  },

  activate() {
    this._super(...arguments)

    scrollTo('top', this)
  },
})
