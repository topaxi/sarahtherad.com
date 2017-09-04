import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    let publisher = 'sarahtherad.com'
    let url = `https://${publisher}/about`

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@type': 'Person',
      givenName: 'Sarah',
      familyName: 'Christener',
      email: 'info@sarahtherad.com',
      nationality: 'Switzerland',
      sameAs: [
        'https://twitter.com/sarah_therad/',
        'https://www.instagram.com/sarah_therad/',
      ],
      publisher,
      url,
    })
    this.set('headData.url', url)

    return this.radBackground.clear()
  },
})
