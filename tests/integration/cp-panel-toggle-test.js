import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | cp panel toggle', function(hooks) {
  setupRenderingTest(hooks);

  test('it sets the proper aria-expanded state', async function(assert) {
    this.set('isPanelOpen', true);
    await render(hbs`
      {{#cp-panel-toggle isOpen=isPanelOpen}}
        Panel Test
      {{/cp-panel-toggle}}
    `);

    const panel = this.$('.cp-Panel-toggle');

    assert.equal(panel.attr('aria-expanded'), 'true', 'panel is opened and aria-expanded is true');

    this.set('isPanelOpen', false);
    assert.equal(panel.attr('aria-expanded'), 'false', 'panel is closed and aria-expanded is false');
  });
});
