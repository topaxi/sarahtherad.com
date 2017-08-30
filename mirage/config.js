export default function() {
  this.namespace = '/wp-json/';
  this.timing = 400;

  this.get('/rad/home', function() {
    return {}
  })

  this.get('/rad/posts', function() {
    return {
      data: []
    }
  })

  this.get('/rad/posts/:slug', function() {
    return {}
  })

  this.get('/rad/graphics', function() {
    return {
      data: []
    }
  })

  this.get('/rad/graphics/:slug', function() {
    return {
      pictures: [ {} ]
    }
  })

  this.get('/rad/background', function() {
    return {
      data: {}
    }
  })
}
