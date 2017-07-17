import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Ember.Route.reopen({
  activate() {
    if (typeof document === 'undefined') return
    if (this.routeName !== 'application') {
      let routeName = this.routeName;
      if (routeName === 'index') routeName = 'home';
      document.body.classList.add(slug(routeName))
    }
  },
  deactivate() {
    if (typeof document === 'undefined') return
    let routeName = this.routeName;
    if (routeName === 'index') routeName = 'home';
    document.body.classList.remove(slug(routeName))
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

function slug(routeName) {
  return routeName.replace(/\./g, '_')
}

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
