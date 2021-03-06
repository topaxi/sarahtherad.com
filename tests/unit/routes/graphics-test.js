import Service from '@ember/service'
import RSVP from 'rsvp'
import { moduleFor, test } from 'ember-qunit'

const { Promise } = RSVP

const RadService = Service.extend({
  graphic(_slug) {
    return Promise.resolve({})
  },
  background() {
    return Promise.resolve({ url: '', color: '#000' })
  },
})

moduleFor('route:graphics', 'Unit | Route | graphics', {
  needs: ['service:rootclass', 'service:rad-background', 'service:menuTitle'],

  beforeEach() {
    this.register('service:rad', RadService)
  },
})

test('it exists', function(assert) {
  let route = this.subject()
  assert.ok(route)
})
