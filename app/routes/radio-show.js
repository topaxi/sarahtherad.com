import fetch from 'fetch'
import Ember from 'ember'
import query from '../utils/query'

const LIMIT = 20;

const { Route, inject } = Ember

export default Route.extend({
  radBackground: inject.service(),

  queryParams: {
    page: {
      refreshModel: true
    }
  },

  beforeModel() {
    this.get('radBackground').clear()
  },

  model({ page }) {
    let params = query({ offset: page * LIMIT, limit: LIMIT })
    let url = `https://api.mixcloud.com/derdienstagmorgen/cloudcasts/${params}`

    return fetch(url)
      .then(res => res.json())
  }
})
