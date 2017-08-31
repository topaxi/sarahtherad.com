import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    didTransition() {
      this.controller.set('open', false);
    }
  }
})
