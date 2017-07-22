import Ember from 'ember'

const { Route, inject } = Ember

export default Route.extend({
  radBackground: inject.service(),

  afterModel() {
    return this.get('radBackground').clear()
  },
})
