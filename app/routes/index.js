import fetch from 'fetch'
import RSVP from 'rsvp'
import Ember from 'ember'

const { Route } = Ember
const { Promise } = RSVP

export default Route.extend({
  model() {
    return Promise.all([
      Promise.race([
        fetch('https://api.mixcloud.com/derdienstagmorgen/cloudcasts/')
          .then(res => res.json())
          .then(casts => casts.data[Math.round(Math.random() * casts.data.length)])
          .then(cast => Object.assign({ type: 'radio-shows' }, cast))
          .catch(_err => null),
        new Promise(resolve => setTimeout(resolve, 500)),
      ]),
      [
        {
          id: 2,
          type: 'graphics',
          slug: 'paul-stanley',
          width: 224,
          height: 300,
          src: 'https://wordpress-test.sarahtherad.com/wp-content/uploads/2017/04/paul-stanley.jpg',
          title: 'Paul Stanley',
        },
        {
          id: 3,
          type: 'graphics',
          slug: 'sleepy-topaxi-cat',
          width: 646,
          height: 442,
          src: '/pictures/sleepy-ninja.svg',
          title: 'Sleepy topaxi cat',
        },
        {
          id: 4,
          type: 'posts',
          slug: 'the-doors',
          title: 'The Doors',
          excerpt: `The doors to your mind are big and heavy and old. as old as the world. u have been here for so many times, you lost count in between.
during all the years of walking the earth, you learned how to keep them closed. there were many attemps to break them open. to get a glimpse inside.
but your doors did hold. then, now, always. they were built to endure all of the times. to keep inside what's behind.
but baby I dont care what you hide behind your doors. I've seen it all. the monsters, the demons, the abyss within. there's nothing I couldn't take. I've known you for a day, I've known you for a 100 years, what does it even matter.
I can show you what it's like. what it's all about. I can take you high. I can set you free. I'm the one.`,
        }
      ]
    ])
      .then(([ cast, posts ]) => cast ? [ cast, ...posts ] : posts)
  }
})
