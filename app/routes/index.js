import fetch from 'fetch'
import RSVP from 'rsvp'
import Ember from 'ember'
import shoebox from '../utils/shoebox'

const { Route } = Ember
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
  }
})
