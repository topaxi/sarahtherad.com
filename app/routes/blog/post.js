import Ember from 'ember'
import shoebox from '../../utils/shoebox'

const { Route } = Ember

export default Route.extend({
  @shoebox
  model({ slug }) {
    return this.rad.post(slug)
  },

  afterModel(model) {
    this.radBackground.clear()
    let publisher = 'sarahtherad.com'
    let url = `https://${publisher}/blog/${model.slug}`

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@type': 'Article',
      publisher,
      'author': {
        '@type': 'Person',
        name: 'Sarahtherad',
        image: '',
        url: `https://${publisher}/`,
        sameAs: 'https://twitter.com/sarah_therad'
      },
      'headline': model.title,
      url,
      datePublished: model.date,
      //dateModified: '2016-06-17T07:12:13.622Z',
      //keywords: 'ES2016, ES2017',
      description: model.description,
    })
    this.set('headData.url', url)
    this.set('headData.description', model.description)
  },
})
