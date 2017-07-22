import RSVP from 'rsvp'
import Ember from 'ember'
import wait from '../utils/wait'

const { Promise } = RSVP
const { Service, inject } = Ember

export default Service.extend({
  rad: inject.service(),

  background: null,

  clear() {
    this.set('background', null)
  },

  reload() {
    this.get('rad').background()
      .then(res => res.data)
      .then(url => Promise.race([ fetchImage(url), wait(200, url) ]))
      .then(url => this.set('background', url))
  },
})

function fetchImage(url) {
  return new Promise((resolve, _reject) => {
    let img = new Image
    img.src = url
    img.onload = () => resolve(url)
  })
}
