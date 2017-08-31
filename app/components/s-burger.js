import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: 'hamburglar',
  classNameBindings: [ 'open:is-open', 'closed:is-closed' ],

  touched: false,

  closed: computed('open', 'touched', function() {
    return this.get('touched') && !this.get('open')
  }),

  click() {
    this.set('touched', true)
    this.toggleProperty('open')
  }
});
