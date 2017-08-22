import Ember from 'ember'

const { Component, computed, inject } = Ember

const ESC_KEYCODE = 27

export default Component.extend({
  router: inject.service(),
  classNames: [ 'graphics-post' ],
  classNameBindings: [ 'isSVG:graphics-post--svg' ],
  model: null,
  showContent: false,

  init() {
    this._super(...arguments)
    this.escClose = this.escClose.bind(this)
  },

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
    window.addEventListener('keypress', this.escClose)
    document.documentElement.classList.add('no-scroll')
  },

  willDestroyElement() {
    window.removeEventListener('keypress', this.escClose)
    document.documentElement.classList.remove('no-scroll')
  },

  escClose(e) {
    if (e.keyCode === ESC_KEYCODE) {
      this.get('router').transitionTo('graphics.index')
    }
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
