import { moduleFor, test } from 'ember-qunit';

moduleFor('route:blog', 'Unit | Route | blog', {
  needs: ['service:rootclass']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
