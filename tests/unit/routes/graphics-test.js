import { moduleFor, test } from 'ember-qunit';

moduleFor('route:graphics', 'Unit | Route | graphics', {
  needs: ['service:rootclass']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
