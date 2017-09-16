import Route from '@ember/routing/route';
import shoebox from '../../utils/shoebox'
import scrollTo from '../../utils/scroll-to'
import stripHtml from '../../utils/strip-html'

export default Route.extend({
  @shoebox
  model({ slug }) {
    return this.rad.post(slug)
  },

  afterModel(model) {
    let publisher = 'sarahtherad.com'
    let url = `https://${publisher}/blog/${model.slug}`
    let description = stripHtml(model.description)

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@type': 'Article',
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
      datePublished: model.date,
      dateModified: model.modified,
      //keywords: 'ES2016, ES2017',
      description,
    })
    this.set('headData.url', url)
    this.set('headData.picture', model.background.url)
    this.set('headData.description', description)
    this.radBackground.setBackground(
      model.background.url,
      model.background.color,
    )
  },

  activate() {
    this._super(...arguments)

    scrollTo('top', this)
  },
})
