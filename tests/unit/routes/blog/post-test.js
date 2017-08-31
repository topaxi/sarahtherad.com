import Service from '@ember/service';
import RSVP from 'rsvp'
import { moduleFor, test } from 'ember-qunit';

const { Promise } = RSVP

const RadService = Service.extend({
  post(_slug) {
    return Promise.resolve({})
  },
  background() {
    return Promise.resolve({ url: '', color: '#000' })
  }
})

moduleFor('route:blog/post', 'Unit | Route | blog/post', {
  needs: ['service:rootclass', 'service:rad-background'],

  beforeEach() {
    this.register('service:rad', RadService)
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
