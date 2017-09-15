import Route from '@ember/routing/route';
import scrollTo from '../utils/scroll-to'

export default Route.extend({
  afterModel() {
    let url = 'https://sarahtherad.com/about'
    let email = 'info@sarahtherad.com'
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
      ],
    })
    this.set('headData.url', url)

    return this.radBackground.clear()
  },

  activate() {
    scrollTo('top', this)
  },
})
