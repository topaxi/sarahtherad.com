import Ember from 'ember'
import shoebox from '../../utils/shoebox'

const { Route } = Ember

export default Route.extend({
  @shoebox
  model({ slug }) {
    return this.rad.graphic(slug)
  },

  afterModel(model) {
    let publisher = 'sarahtherad.com'
    let url = `https://${publisher}/blog/${model.slug}`

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@type': 'VisualArtwork',
      publisher,
      author: {
        '@type': 'Person',
        name: 'Sarahtherad',
        image: '',
        url: `https://${publisher}/`,
        sameAs: 'https://twitter.com/sarah_therad'
      },
      headline: model.title,
      url,
      image: model.pictures[0].src,
      datePublished: model.date,
      dateModified: model.modified,
      //keywords: 'ES2016, ES2017',
      description: model.content,
    })
    this.set('headData.url', url)
    this.set('headData.picture', model.pictures[0].src)
    this.set('headData.description', model.content)
  },
})
