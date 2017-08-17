import Ember from 'ember'

const { Route, inject } = Ember

const NOT_FOUND = 404

export default Route.extend({
  fastboot: inject.service(),

  model() {
    if (this.get('fastboot.isFastBoot')) {
      this.set('fastboot.response.statusCode', NOT_FOUND)
    }
  }
})
