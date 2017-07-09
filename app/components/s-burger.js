import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'hamburglar',
  classNameBindings: [ 'open:is-open', 'open::is-closed' ],

  click() {
    document.documentElement.classList
      .toggle('menu-open', this.toggleProperty('open'))
  }
});
