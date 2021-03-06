import { inject as service } from '@ember/service'
import Controller from '@ember/controller'
import { htmlSafe } from '@ember/string'
import { computed } from '@ember/object'

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
        let addRemoveEventListener = `${value ? 'add' : 'remove'}EventListener`
        window[addRemoveEventListener]('keypress', this.escClose)
      }

      if (value) {
        this.get('rootclass').add('menu-open')
      } else {
        this.get('rootclass').remove('menu-open')
      }

      return value
    },
  }),

  escClose(e) {
    if (e.keyCode === ESC_KEYCODE) {
      this.set('open', false)
    }
  },

  backgroundStyle: computed(
    'radBackground.{background,backgroundColor}',
    function() {
      let url = this.get('radBackground.background')
      let backgroundColor = this.get('radBackground.backgroundColor')

      if (!/^#[\da-f]{6}$/.test(backgroundColor)) {
        backgroundColor = 'transparent'
      }

      return url !== null
        ? htmlSafe(`background: ${backgroundColor} url(${url})`)
        : null
    },
  ),

  headerStyle: computed('radBackground.color', function() {
    return htmlSafe(`color: ${this.get('radBackground.color')}`)
  }),
})
