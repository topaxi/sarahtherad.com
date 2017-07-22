import Ember from 'ember'

const { Route, inject } = Ember

export default Route.extend({
  rad: inject.service(),

  model({ slug }) {
    return this.get('rad').post(slug)
  }
})
