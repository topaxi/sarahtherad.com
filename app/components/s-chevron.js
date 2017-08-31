import Component from '@ember/component';

export default Component.extend({
  classNames: [ 'chevron' ],
  classNameBindings: [ 'rotate:chevron--rotate' ],
  rotate: false
})
