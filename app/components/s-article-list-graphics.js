import fetch from 'fetch'
import Ember from 'ember'
import ArticleListItemComponent from './s-article-list-item'

const { computed, inject } = Ember

export default ArticleListItemComponent.extend({
  fastboot: inject.service(),
  classNames: [ 'list-item--graphics' ],
  classNameBindings: [ 'isWide:list-item--wide' ],
  model: null,

  picture: computed('model.pictures.[]', function() {
    return this.get('model.pictures')[0]
  }),

  hasSize: computed('picture.{width,height}', function() {
    return this.get('picture.width') && this.get('picture.height')
  }),

  isWide: computed('hasSize', 'picture.{width,height}', 'picture.src', function() {
    if (this.get('hasSize')) {
      return this.get('picture.width') > this.get('picture.height')
    }

    if (!this.get('fastboot.isFastBoot')) {
      fetch(this.get('picture.src'))
        .then(res => res.text())
        .then(svg => {
          let m = /viewBox=".*?\s+.*?\s+(.*?)\s+(.*?)"/.exec(svg)

          if (m) {
            this.set('isWide', parseFloat(m[1]) > parseFloat(m[2]))
          }
        })
    }
  }),
})
