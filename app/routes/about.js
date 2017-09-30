import Route from '@ember/routing/route';
import scrollTo from '../utils/scroll-to'

export default Route.extend({
  model() {
    return this.radBackground.reload({
      url: '/assets/pictures/about-background.jpeg',
      color: '#fff',
    })
  },

  afterModel() {
    let url = 'https://sarahtherad.com/about'
    let email = 'graphics@sarahtherad.com'
    let socialMedia = [
      'https://twitter.com/sarah_therad/',
      'https://www.instagram.com/sarah_therad/',
    ]

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          email,
          legalName: 'Christener Graphics & Communications',
          logo: 'https://sarahtherad.com/app-logos/logo512.png',
          sameAs: socialMedia,
          url,
          location: {
            '@type': 'PostalAddress',
            addressCountry: 'Switzerland',
            postalCode: 3600,
            addressLocality: 'Thun',
            addressRegion: 'Thun',
            streetAddress: 'Seefeldstrasse 18',
          },
        },
        {
          '@type': 'Person',
          name: 'Sarah Christener',
          givenName: 'Sarah',
          familyName: 'Christener',
          email,
          nationality: 'Switzerland',
          sameAs: socialMedia,
          url,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': 'https://sarahtherad.com/',
                name: 'sarahtherad.com',
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@id': url,
                name: 'About',
              },
            },
          ],
        },
      ],
    })
    this.set('headData.url', url)
  },

  activate() {
    this._super(...arguments)

    scrollTo('top', this)
  },
})
