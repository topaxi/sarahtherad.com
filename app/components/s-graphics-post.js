import Ember from 'ember'

const { Component, computed } = Ember

export default Component.extend({
  classNames: [ 'graphics-post' ],
  classNameBindings: [ 'isSVG:graphics-post--svg' ],
  model: null,
  showContent: false,

  isSVG: computed('currentPicture.src', function() {
    return /\.svg$/.test(this.get('currentPicture.src'))
  }),

  currentPictureIndex: 0,

  currentPicture: computed('model.pictures.[]', 'currentPictureIndex', function() {
    return this.get('model.pictures')[this.get('currentPictureIndex')]
  }),

  hasNext: computed('model.pictures.[]', 'currentPictureIndex', function() {
    return this.get('currentPictureIndex') < this.get('model.pictures.length') - 1
  }),

  hasMultiple: computed('model.pictures.[]', function() {
    return this.get('model.pictures.length') > 1
  }),

  didInsertElement() {
    document.documentElement.classList.add('no-scroll')
  },

  willDestroyElement() {
    document.documentElement.classList.remove('no-scroll')
  },

  actions: {
    'show-content'() {
      this.toggleProperty('showContent')
    },
    previous() {
      this.set('currentPictureIndex', this.get('currentPictureIndex') - 1)
    },
    next() {
      this.set('currentPictureIndex', this.get('currentPictureIndex') + 1)
    }
  }
})
