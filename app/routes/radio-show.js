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

  @shoebox
  model({ page }) {
    let params = query({ offset: page * LIMIT, limit: LIMIT })
    let url = `https://api.mixcloud.com/derdienstagmorgen/cloudcasts/${params}`

    return fetch(url)
      .then(res => res.json())
  },

  afterModel() {
    this.radBackground.clear()
  },

  activate() {
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
