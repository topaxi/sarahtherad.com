import Service from '@ember/service'
import { moduleFor, test } from 'ember-qunit'

const FastbootService = Service.extend({
  isFastBoot: false,
})

moduleFor('route:not-found', 'Unit | Route | not found', {
  needs: ['service:rootclass'],
  beforeEach() {
    this.register('service:fastboot', FastbootService)
  },
})

test('it exists', function(assert) {
  let route = this.subject()
  assert.ok(route)
})
