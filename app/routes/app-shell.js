import Route from '@ember/routing/route'

export default Route.extend({
  model() {
    return this.radBackground.reload({
      url: '/assets/pictures/about-background.jpeg',
      color: '#fff',
    })
  },
})
