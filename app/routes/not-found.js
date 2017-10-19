import { inject as service } from '@ember/service'
import Route from '@ember/routing/route'

const NOT_FOUND = 404

export default Route.extend({
  fastboot: service(),

  model() {
    if (this.get('fastboot.isFastBoot')) {
      this.set('fastboot.response.statusCode', NOT_FOUND)
    }
  },
})
