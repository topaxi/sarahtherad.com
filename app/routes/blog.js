import Ember from 'ember'

const { Route, inject } = Ember

export default Route.extend({
  menuTitle: inject.service(),

  activate() {
    this.set('menuTitle.title', 'Blog')
    this.set('menuTitle.route', 'blog.index')
  },

  deactivate() {
    this.get('menuTitle').reset()
  },
})
