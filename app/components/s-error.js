import Component from '@ember/component'
import { computed } from '@ember/object'
import { inject as service } from '@ember/service'

const isFastBoot = typeof FastBoot !== 'undefined'

export default Component.extend({
  fastboot: service(),

  init() {
    this._super(...arguments)
    this.updateOnlineStatus = this.updateOnlineStatus.bind(this)

    if (isFastBoot && this.get('error.httpStatus')) {
      this.set('fastboot.response.statusCode', this.get('error.httpStatus'))
    }
  },

  networkError: computed('error', function() {
    return (
      !this.get('onLine') ||
      /network request failed/i.test(this.get('error.message'))
    )
  }),

  onLine: computed(() => isFastBoot || navigator.onLine).volatile(),

  updateOnlineStatus(_event) {
    this.set('onLine', isFastBoot || navigator.onLine)
  },

  didInsertElement() {
    window.addEventListener('online', this.updateOnlineStatus)
    window.addEventListener('offline', this.updateOnlineStatus)
  },

  willDestroyElement() {
    window.removeEventListener('online', this.updateOnlineStatus)
    window.removeEventListener('offline', this.updateOnlineStatus)
  },
})
