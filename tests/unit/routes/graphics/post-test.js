import { moduleFor, test } from 'ember-qunit';

moduleFor('route:graphics/post', 'Unit | Route | graphics/post', {
  needs: ['service:rootclass']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
