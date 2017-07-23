import RSVP from 'rsvp'
import Ember from 'ember'
import { moduleFor, test } from 'ember-qunit'

const { Promise } = RSVP
const { Service } = Ember

const RadService = Service.extend({
  background() {
    return Promise.resolve({ url: '', color: '#000' })
  }
})

moduleFor('service:rad-background', 'Unit | Service | rad background', {
  beforeEach() {
    this.register('service:rad', RadService)
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
