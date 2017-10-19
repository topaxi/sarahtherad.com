import Service from '@ember/service'
import fetch from 'fetch'
import query from '../utils/query'
import ENV from '../config/environment'

export default Service.extend({
  _url: ENV.apiHost || '',

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

  post(slug) {
    return this.fetchJSON(`rad/posts/${slug}`)
  },

  posts() {
    return this.fetchJSON('rad/posts')
  },

  graphic(slug) {
    return this.fetchJSON(`rad/graphics/${slug}`)
  },

  graphics() {
    return this.fetchJSON('rad/graphics')
  },

  background() {
    return this.fetchJSON('rad/background')
  },
})
