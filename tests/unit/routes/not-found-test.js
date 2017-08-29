import Ember from 'ember'
import { moduleFor, test } from 'ember-qunit'

const { Service } = Ember

const FastbootService = Service.extend({
  isFastBoot: false,
})

moduleFor('route:not-found', 'Unit | Route | not found', {
  needs: [ 'service:rootclass' ],
  beforeEach() {
    this.register('service:fastboot', FastbootService)
  }
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
