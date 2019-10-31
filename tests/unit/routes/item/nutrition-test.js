import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | item/linespecs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:item/nutrition');
    assert.ok(route);
  });
});
