import Service from '@ember/service'
import RSVP from 'rsvp'
import { moduleFor, test } from 'ember-qunit'

const { Promise } = RSVP

const RadService = Service.extend({
  background() {
    return Promise.resolve({ url: '', color: '#000' })
  },
})

moduleFor('route:about', 'Unit | Route | about', {
  needs: ['service:rootclass', 'service:rad-background'],

  beforeEach() {
    this.register('service:rad', RadService)
  },
})

test('it exists', function(assert) {
  let route = this.subject()
  assert.ok(route)
})
