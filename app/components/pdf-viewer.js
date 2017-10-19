import { inject as service } from '@ember/service'
import Component from '@ember/component'
import { computed } from '@ember/object'

export default Component.extend({
  fastboot: service(),

  tagName: '',

  hasPdfJs() {
    let userAgent = navigator.userAgent

    return (
      (/Firefox/.test(userAgent) || window.chrome) &&
      !/Android/.test(userAgent) &&
      !/iPad|iPhone/.test(userAgent)
    )
  },

  src: computed({
    get() {
      return ''
    },
    set(key, val) {
      // We won't try to render the iframe in fastboot as we may
      // switch the url depending on the browser/device
      // which would cause a double fetch from the SSR content
      // and the ember rerender
      if (this.get('fastboot.isFastBoot')) {
        return ''
      }

      if (this.hasPdfJs()) {
        return val
      }

      return (
        'https://docs.google.com/viewer' +
        `?url=${encodeURIComponent(val)}` +
        '&embedded=true'
      )
    },
  }),
})
