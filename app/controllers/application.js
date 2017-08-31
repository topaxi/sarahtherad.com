import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';

const ESC_KEYCODE = 27

export default Controller.extend({
  rootclass: service(),
  radBackground: service(),
  menuTitle: service(),
  fastboot: service(),

  init() {
    this._super(...arguments)
    this.escClose = this.escClose.bind(this)
  },

  open: computed({
    get() {
      return false
    },
    set(key, value) {
      if (!this.get('fastboot.isFastBoot')) {
        let addRemoveEventListener =
          `${value ? 'add' : 'remove'}EventListener`
        window[addRemoveEventListener]('keypress', this.escClose)
      }

      return value
    }
  }),

  escClose(e) {
    if (e.keyCode === ESC_KEYCODE) {
      this.set('open', false)
    }
  },

  backgroundStyle: computed('radBackground.background', function() {
    let url = this.get('radBackground.background')

    return url !== null ? htmlSafe(`background-image: url(${url})`) : null
  }),

  headerStyle: computed('radBackground.color', function() {
    return htmlSafe(`color: ${this.get('radBackground.color')}`)
  }),
})
