import fetch from 'fetch'
import RSVP from 'rsvp'
import Ember from 'ember'

const { Route, inject } = Ember
const { Promise } = RSVP

export default Route.extend({
  rad: inject.service(),
  radBackground: inject.service(),

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
      this.get('rad').home(),
      this.get('radBackground').reload(),
    ])
      .then(([ cast, radHome ]) =>
        cast ? [ cast, ...radHome.data ] : radHome.data
      )
  }
})
