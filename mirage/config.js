export default function() {
  this.namespace = '/wp-json/';
  this.timing = 400;

  this.get('/rad/home', function() {
    return { data: [] }
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
      id: 1,
      type: 'graphics',
      slug: 'ninja-kitty',
      date: '2017-08-01T20:30:56',
      modified: '2017-09-04T09:46:24',
      title: 'Ninja Kitty',
      thumbnail: false,
      pictures: [
        {
          src: '/graphics/ninja_d-sitting.svg',
          width: null,
          height: null,
          title: 'ninja_d-sitting',
          caption: null,
          mime: 'image/svg+xml'
        },
        {
          src: '/graphics/ninja_d-sleepin_def.svg',
          width: null,
          height: null,
          title: 'ninja_d-sleepin_def',
          caption: null,
          mime: 'image/svg+xml'
        },
        {
          src: '/graphics/ninja_d-fighting2.svg',
          width: null,
          height: null,
          title: 'ninja_d-fighting2',
          caption: null,
          mime: 'image/svg+xml'
        },
        {
          src: '/graphics/ninja_d-fighting.svg',
          width: null,
          height: null,
          title: 'ninja_d-fighting',
          caption: null,
          mime: 'image/svg+xml'
        },
        {
          src: '/graphics/ninja_d-404.svg',
          width: null,
          height: null,
          title: 'ninja_d-404',
          caption: null,
          mime: 'image/svg+xml'
        },
        {
          src: '/graphics/ninja_d-pizzaiolo.svg',
          width: null,
          height: null,
          title: 'ninja_d-pizzaiolo',
          caption: null,
          mime: 'image/svg+xml'
        }
      ],
      content: '<p>So Topaxi asked me to create some kind of ninja avatar for him. I decided to go for a ninja kitty because it seemed to fit perfectly. I ended up making various versions of it because it was such a lot of fun to do so. You can find the little guy in his natural habitat on <a href="http://www.topaxi.com">Topaxi&#8217;s website</a>.</p>\n',
    }
  })

  this.get('/rad/background', function() {
    return {
      data: {}
    }
  })
}
