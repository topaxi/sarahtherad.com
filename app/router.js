import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Ember.Route.reopen({
  activate() {
    if (this.routeName !== 'application') {
      let routeName = this.routeName;
      if (routeName === 'index') routeName = 'home';
      document.body.classList.add(routeName)
    }
  },
  deactivate() {
    let routeName = this.routeName;
    if (routeName === 'index') routeName = 'home';
    document.body.classList.remove(routeName)
  },
  getParentRoute() {
    let route = this;
    let handlerInfos = route.router.router.currentHandlerInfos;
    let parent, current;

    for (let i = 0; i < handlerInfos.length; i++) {
      current = handlerInfos[i].handler;
      if (current.routeName === route.routeName ||
          (current.routeName.match(/./) &&
            current.routeName.split('.')[1] === route.routeName)) {
        return parent.routeName;
      }

      parent = current;
    }
  }
})

Router.map(function() {
});

export default Router;
