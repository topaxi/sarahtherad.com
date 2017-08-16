import Ember from 'ember'

export default Ember.Component.extend({
  classNames: [ 'chevron' ],
  classNameBindings: [ 'rotate:chevron--rotate' ],
  rotate: false
})
