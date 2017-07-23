import RSVP from 'rsvp'
import Ember from 'ember'
import { moduleFor, test } from 'ember-qunit';

const { Promise } = RSVP
const { Service } = Ember

const RadService = Service.extend({
  graphic(_slug) {
    return Promise.resolve({})
  }
})

moduleFor('route:graphics/post', 'Unit | Route | graphics/post', {
  needs: ['service:rootclass'],

  beforeEach() {
    this.register('service:rad', RadService)
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
