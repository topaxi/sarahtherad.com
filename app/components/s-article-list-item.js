import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'article',
  classNames: [ 'list-item' ],
  attributeBindings: 'model.id:data-post-id',
});
