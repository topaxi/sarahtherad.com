import Ember from 'ember'
import ArticleListItemComponent from './s-article-list-item'

const { computed } = Ember

export default ArticleListItemComponent.extend({
  classNames: [ 'list-item--graphics' ],
  classNameBindings: [ 'isWide:list-item--wide' ],

  isWide: computed('model.{width,height}', function() {
    return this.get('model.width') > this.get('model.height')
  }),
})
