import RSVP from 'rsvp'
import Ember from 'ember'
import wait from '../utils/wait'

const { Promise } = RSVP
const { Service, inject } = Ember

export default Service.extend({
  rad: inject.service(),
  fastboot: inject.service(),
  initial: true,

  init() {
    this.clear()
  },

  clear() {
    this.set('background', null)
    this.set('color', '#000')
  },

  setBackground(background, color) {
    this.set('background', background)
    this.set('color', color)
  },

  reload() {
    let isFastBoot = this.get('fastboot.isFastBoot')
    if (!isFastBoot && this.initial) {
      this.initial = false
      let data = this.get('fastboot.shoebox').retrieve('initial-background')
      if (data) {
        this.setBackground(data.url, data.color)

        return Promise.resolve(data)
      }
    }

    return this.get('rad').background()
      .then(res => res.data)
      .then(data => {
        if (!isFastBoot) {
          return Promise.race([ fetchImage(data.url), wait(200) ])
            .then(() => data)
        }

        this.get('fastboot.shoebox').put('initial-background', data)

        return data
      })
      .then(data => {
        this.setBackground(data.url, data.color)

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
