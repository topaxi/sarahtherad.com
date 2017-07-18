import Ember from 'ember'

const { Component, inject, computed } = Ember

export default Component.extend({
  tagName: 's-mixcloud-player',
  mixcloud: inject.service(),
  classNameBindings: [ 'cast:visible' ],
  cast: computed.readOnly('mixcloud.cast'),
})
