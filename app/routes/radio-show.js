import fetch from 'fetch'
import Ember from 'ember'
import query from '../utils/query'
import shoebox from '../utils/shoebox'

const LIMIT = 20;

const { Route } = Ember

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
})
