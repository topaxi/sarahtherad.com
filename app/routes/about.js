import Ember from 'ember'

const { Route, inject } = Ember

export default Route.extend({
  radBackground: inject.service(),

  beforeModel() {
    return this.get('radBackground').clear()
  },
})
