import Route from '@ember/routing/route';
import shoebox from '../../utils/shoebox'
import stripHtml from '../../utils/strip-html'
import { breadcrumb } from '../../utils/structured-data'

export default Route.extend({
  @shoebox
  model({ slug }) {
    return this.rad.graphic(slug)
  },

  afterModel(model) {
    let publisher = 'sarahtherad.com'
    let url = `https://${publisher}/blog/${model.slug}`
    let picture = model.pictures[0]
    let thumbnail = model.thumbail || picture
    let description = stripHtml(model.content)
    let author = {
      '@type': 'Person',
      name: 'Sarahtherad',
      image: '',
      url: `https://${publisher}/`,
      sameAs: [
        'https://twitter.com/sarah_therad/',
        'https://www.instagram.com/sarah_therad/',
      ]
    }

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'VisualArtwork',
          publisher,
          author,
          artist: author,
          headline: model.title,
          url,
          image: picture.src,
          width: picture.width,
          height: picture.height,
          fileFormat: picture.mime,
          thumbnailUrl: thumbnail.src,
          datePublished: model.date,
          dateModified: model.modified,
          //keywords: 'ES2016, ES2017',
          description,
        },
        breadcrumb([
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': 'https://sarahtherad.com/graphics/',
              name: 'Graphics',
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@id': url,
              name: model.title,
              image: thumbnail.src,
            },
          },
        ]),
      ],
    })
    this.set('headData.url', url)
    this.set('headData.picture', thumbnail.src)
    this.set('headData.pictureDescription', model.title)
    this.set('headData.description', description)
  },
})
