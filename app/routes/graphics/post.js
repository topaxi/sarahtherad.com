import Ember from 'ember';

export default Ember.Route.extend({
  model({ slug }) {
    return this.modelFor('graphics').find(graphic => graphic.slug === slug);
  },
});
