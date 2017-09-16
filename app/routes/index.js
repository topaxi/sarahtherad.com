import Route from '@ember/routing/route';
import fetch from 'fetch'
import RSVP from 'rsvp'
import shoebox from '../utils/shoebox'
import scrollTo from '../utils/scroll-to'

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
    let description = ''
    let publisher = 'sarahtherad.com'
    let url = `https://${publisher}/`

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@type': 'Website',
      publisher,
      url,
      description,
    })
    this.set('headData.url', url)
    this.set('headData.description', description)
  },

  activate() {
    this._super(...arguments)

    scrollTo('top', this)
  },
})
