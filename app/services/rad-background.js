import RSVP from 'rsvp'
import Ember from 'ember'
import wait from '../utils/wait'

const { Promise } = RSVP
const { Service, inject } = Ember

export default Service.extend({
  rad: inject.service(),
  fastboot: inject.service(),

  init() {
    this.clear()
  },

  clear() {
    this.set('background', null)
    this.set('color', '#000')
  },

  reload() {
    return this.get('rad').background()
      .then(res => res.data)
      .then(data => {
        if (!this.get('fastboot.isFastBoot')) {
          return Promise.race([ fetchImage(data.url), wait(200) ])
            .then(() => data)
        }

        return data
      })
      .then(data => {
        this.set('background', data.url)
        this.set('color', data.color)

        return data
      })
  },
})

function fetchImage(url) {
  return new Promise((resolve, _reject) => {
    let img = new Image
    img.src = url
    img.onload = () => resolve(url)
  })
}
