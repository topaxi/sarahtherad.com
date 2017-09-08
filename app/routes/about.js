import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    let url = 'https://sarahtherad.com/about'

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@type': 'Person',
      name: 'Sarah Christener',
      givenName: 'Sarah',
      familyName: 'Christener',
      email: 'info@sarahtherad.com',
      nationality: 'Switzerland',
      sameAs: [
        'https://twitter.com/sarah_therad/',
        'https://www.instagram.com/sarah_therad/',
      ],
      url,
    })
    this.set('headData.url', url)

    return this.radBackground.clear()
  },
})
