import Ember from 'ember'
import ArticleListItemComponent from './s-article-list-item'

const { computed } = Ember

export default ArticleListItemComponent.extend({
  classNames: [ 'list-item--graphics' ],
  classNameBindings: [ 'isWide:list-item--wide' ],
  model: null,

  picture: computed('model.pictures.[]', function() {
    return this.get('model.pictures')[0];
  }),

  isWide: computed('picture.{width,height}', function() {
    return this.get('picture.width') > this.get('picture.height')
  }),
})
