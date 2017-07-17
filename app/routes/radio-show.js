import fetch from 'fetch'
import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    return fetch('https://api.mixcloud.com/derdienstagmorgen/cloudcasts/')
      .then(res => res.json())
  }
})
