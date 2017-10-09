import Service, { inject as service } from '@ember/service';
import RSVP from 'rsvp'
import wait from '../utils/wait'

const { Promise } = RSVP

export default Service.extend({
  headData: service(),
  rad: service(),
  fastboot: service(),
  initial: true,

  init() {
    this.clear()
  },

  clear() {
    this.set('background', null)
    this.set('backgroundColor', null)
    this.set('headData.themeColor', null)
    this.set('color', '#000')
  },

  setBackground(background, color, backgroundColor = null) {
    this.set('background', background)
    this.set('backgroundColor', backgroundColor)
    this.set('headData.themeColor', backgroundColor)
    this.set('color', color)
  },

  preload(url) {
    return Promise.race([ fetchImage(url), wait(150) ])
  },

  reload(background) {
    let isFastBoot = this.get('fastboot.isFastBoot')
    if (!isFastBoot && this.initial) {
      this.initial = false
      let data = this.get('fastboot.shoebox').retrieve('initial-background')
      if (data) {
        this.setBackground(data.url, data.color, data.backgroundColor)

        return Promise.resolve(data)
      }
    }

    return (
      background ?
      Promise.resolve({ data: background }) :
      this.get('rad').background()
    )
      .then(res => res.data)
      .then(data => {
        if (!isFastBoot) {
          return this.preload(data.url).then(() => data)
        }

        this.get('fastboot.shoebox').put('initial-background', data)

        return data
      })
      .then(data => {
        this.setBackground(data.url, data.color, data.backgroundColor)

        return data
      })
  },
})

function fetchImage(url) {
  return new Promise((resolve, _reject) => {
    let img = new Image
    img.src = url

    if (img.complete || img.readyState === 4) {
      resolve(url)
    }
    else {
      img.onload = () => resolve(url)
    }
  })
}
