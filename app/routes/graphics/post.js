import Route from '@ember/routing/route';
import shoebox from '../../utils/shoebox'
import stripHtml from '../../utils/strip-html'
import { breadcrumb, sarah } from '../../utils/structured-data'

export default Route.extend({
  @shoebox
  prefetch({ slug }) {
    return this.rad.graphic(slug)
  },

  afterModel(model) {
    let publisher = 'sarahtherad.com'
    let baseUrl = `https://${publisher}/`
    let url = `${baseUrl}graphics/${model.slug}`
    let picture = model.pictures[0]
    let thumbnail = model.thumbail || picture
    let description = stripHtml(model.content)

    this.set('headData.jsonld', {
      '@context': 'http://schema.org',
      '@graph': [
        {
          '@type': 'VisualArtwork',
          publisher,
          author: sarah.url,
          artist: sarah.url,
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
          mainEntifyOfPage: {
            '@type': 'WebPage',
            '@id': url,
          },
        },
        breadcrumb([
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': `${baseUrl}graphics/`,
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
