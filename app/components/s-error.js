import Ember from 'ember'

const { Component, computed } = Ember

export default Component.extend({
  init() {
    this._super(...arguments)
    this.updateOnlineStatus = this.updateOnlineStatus.bind(this)
  },

  networkError: computed('error', function() {
    return !this.get('onLine') ||
      /network request failed/i.test(this.get('error.message'))
  }),

  onLine: computed(() => navigator.onLine).volatile(),

  updateOnlineStatus(_event) {
    this.set('onLine', navigator.onLine)
  },

  didInsertElement() {
    window.addEventListener('online',  this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  },

  willDestroyElement() {
    window.removeEventListener('online',  this.updateOnlineStatus);
    window.removeEventListener('offline', this.updateOnlineStatus);
  }
})
