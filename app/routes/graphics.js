import Ember from 'ember'

const { Route, inject } = Ember

export default Route.extend({
  rad: inject.service(),
  radBackground: inject.service(),

  beforeModel() {
    this.get('radBackground').reload()
  },

  model() {
    return this.get('rad').graphics()
  }
})
