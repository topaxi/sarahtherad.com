import Ember from 'ember'

const { Component, inject } = Ember

export default Component.extend({
  tagName: 's-mixcloud',
  mixcloud: inject.service(),

  actions: {
    play(cast) {
      this.set('mixcloud.cast', cast)
    }
  }
})
