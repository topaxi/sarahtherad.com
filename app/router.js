import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Ember.Route.reopen({
  rootclass: Ember.inject.service(),

  activate() {
    if (typeof document === 'undefined') return
    if (this.routeName !== 'application') {
      let routeName = this.routeName;
      if (routeName === 'index') routeName = 'home';
      this.get('rootclass').add(routeName)
    }
  },
  deactivate() {
    if (typeof document === 'undefined') return
    let routeName = this.routeName;
    if (routeName === 'index') routeName = 'home';
    this.get('rootclass').remove(routeName)
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
  this.route('graphics', function() {
    this.route('post', { path: ':slug' });
  });
  this.route('radio-show');
  this.route('blog', function() {
    this.route('post', { path: ':slug' });
  });
  this.route('about');
});

export default Router;
