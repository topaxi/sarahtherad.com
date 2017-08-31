import Component from '@ember/component';

export default Component.extend({
  tagName: 'article',
  classNames: [ 'list-item' ],
  attributeBindings: [ 'model.id:data-post-id', 'model.lang:lang' ],
});
