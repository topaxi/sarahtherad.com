import { inject as service } from '@ember/service'
import Component from '@ember/component'
import { computed } from '@ember/object'

export default Component.extend({
  tagName: 's-mixcloud-player',
  mixcloud: service(),
  classNameBindings: ['cast:visible'],
  cast: computed.alias('mixcloud.cast'),
})
