import { moduleFor, test } from 'ember-qunit';

moduleFor('route:blog/post', 'Unit | Route | blog/post', {
  needs: ['service:rootclass']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
