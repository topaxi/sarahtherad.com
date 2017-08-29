import Ember from 'ember';
import config from './config/environment';

const { Router: EmberRouter, Route, inject, run } = Ember

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  didTransition() {
    this._super(...arguments)

    if (typeof window.ga === 'function') {
      run.schedule('afterRender', () => {
        window.ga('send', 'pageview', {
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
  this.route('not-found', { path: '/*path' });
});

export default Router;
