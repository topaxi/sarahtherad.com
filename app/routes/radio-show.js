import fetch from 'fetch'
import Ember from 'ember'
import query from '../utils/query'

const LIMIT = 20;

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model({ page }) {
    let params = query({ offset: page * LIMIT, limit: LIMIT })
    let url = `https://api.mixcloud.com/derdienstagmorgen/cloudcasts/${params}`

    return fetch(url)
      .then(res => res.json())
  }
})
