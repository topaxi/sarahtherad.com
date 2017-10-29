import Service from '@ember/service'
import RSVP from 'rsvp'
import { moduleFor, test } from 'ember-qunit'

const { Promise } = RSVP

const RadService = Service.extend({
  background() {
    return Promise.resolve({ url: '', color: '#000' })
  },
})

const HeadDataService = Service.extend({})

const FastbootService = Service.extend({
  isFastBoot: false,
  shoebox: {
    retrieve() {},
    put() {},
  },
})

moduleFor('service:rad-background', 'Unit | Service | rad background', {
  beforeEach() {
    this.register('service:rad', RadService)
    this.register('service:headData', HeadDataService)
    this.register('service:fastboot', FastbootService)
  },
})

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject()
  assert.ok(service)
})
