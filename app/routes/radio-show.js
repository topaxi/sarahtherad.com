import Route from '@ember/routing/route';
import fetch from 'fetch'
import query from '../utils/query'
import shoebox from '../utils/shoebox'
import scrollTo from '../utils/scroll-to'

const LIMIT = 20;

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  beforeModel() {
    this.radBackground.reload({
      url: '/assets/pictures/radio-show-background.jpeg',
      color: '#fff',
    })
  },

  @shoebox
  model({ page }) {
    let params = query({ offset: page * LIMIT, limit: LIMIT })
    let url = `https://api.mixcloud.com/derdienstagmorgen/cloudcasts/${params}`

    return fetch(url)
      .then(res => res.json())
  },

  activate() {
    this._super(...arguments)

    if (!this.get('fastboot.isFastBoot')) {
      document.documentElement.scrollTop = 0
    }
  },

  resetController(controller, isExiting, _transition) {
    if (!isExiting && !this.get('fastboot.isFastBoot')) {
      scrollTo('s-mixcloud', this)
    }
  },
})
