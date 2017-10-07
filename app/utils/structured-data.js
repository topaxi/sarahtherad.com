const email = 'graphics@sarahtherad.com'
const socialMedia = [
  'https://twitter.com/sarah_therad/',
  'https://www.instagram.com/sarah_therad/',
]
const aboutURL = 'https://sarahtherad.com/about'

export const organization = {
  '@type': 'Organization',
  email,
  legalName: 'Christener Graphics & Communications',
  logo: 'https://sarahtherad.com/app-logos/logo512.png',
  sameAs: socialMedia,
  url: aboutURL,
  location: {
    '@type': 'PostalAddress',
    addressCountry: 'Switzerland',
    postalCode: 3600,
    addressLocality: 'Thun',
    addressRegion: 'Thun',
    streetAddress: 'Seefeldstrasse 18',
  },
  contactPoint: {
    availableLanguage: {
      '@type': 'Language',
      name: [ 'German', 'English' ],
    },
    contactType: 'sales',
    telephone: null,
    email,
  },
}

export const sarah = {
  '@type': 'Person',
  name: 'Sarah Christener',
  givenName: 'Sarah',
  familyName: 'Christener',
  email,
  nationality: 'Switzerland',
  sameAs: socialMedia,
  url: aboutURL,
}

export function breadcrumb(listItems = []) {
  let publisher = 'sarahtherad.com'
  let url = `https://${publisher}/`

  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': url,
          name: publisher,
        },
      },
      ...listItems,
    ],
  }
}
