import RSVP from 'rsvp'
import Ember from 'ember'
import { moduleFor, test } from 'ember-qunit';

const { Promise } = RSVP
const { Service } = Ember

const RadService = Service.extend({
  background() {
    return Promise.resolve({ url: '', color: '#000' })
  }
})

moduleFor('route:radio-show', 'Unit | Route | radio show', {
  needs: ['service:rootclass', 'service:rad-background'],

  beforeEach() {
    this.register('service:rad', RadService)
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
