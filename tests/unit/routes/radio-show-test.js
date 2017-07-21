import { moduleFor, test } from 'ember-qunit';

moduleFor('route:radio-show', 'Unit | Route | radio show', {
  needs: ['service:rootclass']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
