import Ember from 'ember'

const { Component, computed } = Ember

export default Component.extend({
  classNames: [ 'graphics-post' ],
  model: null,

  currentPicture: computed('model.pictures', function() {
    return this.get('model.pictures')[0]
  }),
})
