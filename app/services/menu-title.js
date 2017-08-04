import Ember from 'ember'

export default Ember.Service.extend({
  title: null,
  route: null,

  reset() {
    this.set('title', null)
    this.set('route', null)
  },
})
