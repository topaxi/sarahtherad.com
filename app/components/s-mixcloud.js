import { inject as service } from '@ember/service'
import Component from '@ember/component'

export default Component.extend({
  tagName: 's-mixcloud',
  mixcloud: service(),

  actions: {
    play(cast) {
      this.set('mixcloud.cast', cast)
    },
  },
})
