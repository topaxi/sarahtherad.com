import Ember from 'ember'

const { Route } = Ember

export default Route.extend({
  actions: {
    didTransition() {
      this.controller.set('open', false);
    }
  }
})
