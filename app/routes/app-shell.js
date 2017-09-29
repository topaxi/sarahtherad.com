import Route from '@ember/routing/route'

export default Route.extend({
  beforeModel() {
    this.radBackground.set('color', '#fff')
  }
})
