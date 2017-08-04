import Ember from 'ember';
import config from './config/environment';

const { Router: EmberRouter, Route, inject, run } = Ember

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  didTransition() {
    this._super(...arguments)

    if (typeof ga === 'function') {
      run.schedule('afterRender', () => {
        ga('send', 'pageview', {
          'page': this.get('url'),
          'title': this.get('url')
        })
      })
    }
  }
})

Route.reopen({
  rootclass: inject.service(),

  activate() {
    if (this.routeName !== 'application') {
      let routeName = this.routeName;
      if (routeName === 'index') routeName = 'home';
      this.get('rootclass').add(routeName)
    }
  },
  deactivate() {
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
