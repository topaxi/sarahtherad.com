import Service from '@ember/service';

export default Service.extend({
  title: null,
  route: null,

  reset() {
    this.set('title', null)
    this.set('route', null)
  },
})
