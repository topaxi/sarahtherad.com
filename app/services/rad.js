import fetch from 'fetch'
import Ember from 'ember'
import query from '../utils/query'
import ENV from '../config/environment'

export default Ember.Service.extend({
  _url: ENV.apiHost,

  url(path, q = {}) {
    return `${this._url}/wp-json/${path}${query(q)}`
  },

  fetch(path, q) {
    return fetch(this.url(path, q))
  },

  fetchJSON(path, q) {
    return this.fetch(path, q).then(res => res.json())
  },

  home() {
    return this.fetchJSON('rad/home')
  },

  background() {
    return this.fetchJSON('rad/background')
  },
})
