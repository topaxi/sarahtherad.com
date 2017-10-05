import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'button',

  classNames: 'hamburglar',
  classNameBindings: [ 'open:is-open', 'closed:is-closed' ],
  attributeBindings: [
    'aria-haspopup',
    'accesskey',
    '_ariaExpanded:aria-expanded',
  ],

  touched: false,

  closed: computed('open', 'touched', function() {
    return this.get('touched') && !this.get('open')
  }),

  _ariaExpanded: computed('open', function() {
    return this.get('open') ? 'true' : 'false';
  }),

  click() {
    this.set('touched', true)
    this.toggleProperty('open')
  }
});
