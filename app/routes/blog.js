import { inject as service } from '@ember/service'
import Route from '@ember/routing/route'

export default Route.extend({
  menuTitle: service(),

  activate() {
    this.set('menuTitle.title', 'Blog')
    this.set('menuTitle.route', 'blog.index')
  },

  deactivate() {
    this.get('menuTitle').reset()
  },
})
