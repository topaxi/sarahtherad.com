import Ember from 'ember';

export default Ember.Route.extend({
  model({ slug }) {
    return [
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
    ].find(graphic => graphic.slug === slug);
  },
});