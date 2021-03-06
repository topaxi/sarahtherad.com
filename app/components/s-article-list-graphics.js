import { inject as service } from '@ember/service'
import { computed } from '@ember/object'
import { htmlSafe } from '@ember/string'
import fetch from 'fetch'
import ArticleListItemComponent from './s-article-list-item'

export default ArticleListItemComponent.extend({
  fastboot: service(),
  classNames: ['list-item--graphics'],
  classNameBindings: ['isWide:list-item--wide'],
  attributeBindings: ['style'],
  model: null,

  style: computed('picture.backgroundColor', function() {
    let color = this.get('picture.backgroundColor')

    if (/^#[\da-f]{6}$/.test(color)) {
      return htmlSafe(`--graphics-background-color: ${color}`)
    }

    return null
  }),

  picture: computed('model.{thumbnail,pictures.[]}', function() {
    return this.get('model.thumbnail') || this.get('model.pictures')[0]
  }),

  hasSize: computed('picture.{width,height}', function() {
    return this.get('picture.width') && this.get('picture.height')
  }),

  isWide: computed('hasSize', 'picture.{width,height,src}', function() {
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
