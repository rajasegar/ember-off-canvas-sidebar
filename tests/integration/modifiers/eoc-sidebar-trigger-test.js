import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find, waitUntil } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | eoc-sidebar-trigger', function(hooks) {
  setupRenderingTest(hooks);

  const markup = hbs`
<div id="st-container" class="st-container">
  <EocSidebar @effect="st-effect-slide-in-on-top">
    <h2 class="icon icon-lab">Sidebar</h2>
    <ul>
      <li><a class="icon icon-data" href="#">Data Management</a></li>
      <li><a class="icon icon-location" href="#">Location</a></li>
      <li><a class="icon icon-study" href="#">Study</a></li>
      <li><a class="icon icon-photo" href="#">Collections</a></li>
      <li><a class="icon icon-wallet" href="#">Credits</a></li>
    </ul>
  </EocSidebar>
    <div class="st-content">
      <div class="st-content-inner">

            <button type="button"  {{eoc-sidebar-trigger "st-effect-slide-in-on-top"}}>Slide in on top</button>
            </div>
            </div>
            </div>

  `;

  test('it renders', async function(assert) {
    await render(markup);

    assert.ok(true);
  });

  test('it shows menu', async function(assert) {

    await render(markup);

    await click('button');
    await waitUntil(function() {
      return find('.st-container').classList.contains('st-menu-open');
    }, { timeout: 25 })

    assert.ok(find('.st-container').classList.contains('st-menu-open'));
    assert.ok(find('.st-container').classList.contains('st-effect-slide-in-on-top'));

  });

  test('it closes menu', async function(assert) {

    await render(markup);

    await click('button');
    await waitUntil(function() {
      return find('.st-container').classList.contains('st-menu-open');
    }, { timeout: 25 })

    await click('#st-container');
    assert.notOk(find('.st-container').classList.contains('st-menu-open'));

  });
});
