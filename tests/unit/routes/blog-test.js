import RSVP from 'rsvp'
import Ember from 'ember'
import { moduleFor, test } from 'ember-qunit';

const { Promise } = RSVP
const { Service } = Ember

const RadService = Service.extend({
  posts() {
    return Promise.resolve([])
  },
  background() {
    return Promise.resolve({ url: '', color: '#000' })
  }
})

moduleFor('route:blog', 'Unit | Route | blog', {
  needs: [
    'service:rootclass',
    'service:rad-background',
    'service:menuTitle',
  ],

  beforeEach() {
    this.register('service:rad', RadService)
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
