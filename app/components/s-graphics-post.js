import Ember from 'ember'

const { Component, computed } = Ember

export default Component.extend({
  classNames: [ 'graphics-post' ],
  classNameBindings: [ 'isSVG:graphics-post--svg' ],
  model: null,

  init() {
    this._super(...arguments)
    this.preload()
  },

  isSVG: computed('currentPicture.src', function() {
    return /\.svg$/.test(this.get('currentPicture.src'))
  }),

  currentPictureIndex: 0,

  currentPicture: computed('model.pictures', 'currentPictureIndex', function() {
    return this.get('model.pictures')[this.get('currentPictureIndex')]
  }),

  hasNext: computed('model.pictures.[]', 'currentPictureIndex', function() {
    return this.get('currentPictureIndex') < this.get('model.pictures.length') - 1
  }),

  preload() {
    this.get('model.pictures').forEach(picture => {
      let img = new Image
      img.src = picture.src
    })
  },

  actions: {
    previous() {
      this.set('currentPictureIndex', this.get('currentPictureIndex') - 1)
    },
    next() {
      this.set('currentPictureIndex', this.get('currentPictureIndex') + 1)
    }
  }
})
