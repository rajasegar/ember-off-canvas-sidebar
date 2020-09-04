ember-off-canvas-sidebar
==============================================================================

![Build and Deploy](https://github.com/rajasegar/ember-off-canvas-sidebar/workflows/CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-off-canvas-sidebar/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-off-canvas-sidebar?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](http://img.shields.io/npm/v/ember-off-canvas-sidebar.svg?style=flat)](https://npmjs.org/package/ember-off-canvas-sidebar "View this project on npm")
[![EmberObserver](http://emberobserver.com/badges/ember-off-canvas-sidebar.svg?branch=master)](http://emberobserver.com/addons/ember-off-canvas-sidebar)


Ember addon for off-canvas sidebar menu with transitions.
This addon is inspired by [Transitions for Off canvas navigations](https://tympanus.net/codrops/2013/08/28/transitions-for-off-canvas-navigations) article in [Codrops](https://tympanus.net/codrops).



Installation
------------------------------------------------------------------------------

```
ember install ember-off-canvas-sidebar
```


Usage
------------------------------------------------------------------------------

### Menu
```hbs
<div id="st-container" class="st-container">
  <EocSidebar @effect="st-effect-1">
    <h2 class="icon icon-lab">Sidebar</h2>
    <ul>
      <li><a class="icon icon-data" href="#">Data Management</a></li>
      <li><a class="icon icon-location" href="#">Location</a></li>
      <li><a class="icon icon-study" href="#">Study</a></li>
      <li><a class="icon icon-photo" href="#">Collections</a></li>
      <li><a class="icon icon-wallet" href="#">Credits</a></li>
    </ul>
  </EocSidebar>


    <div class="st-content"><!-- this is the wrapper for the content -->
      <div class="st-content-inner"><!-- extra div for emulating position:fixed of the menu -->
        <!-- YOUR MAIN CONTENT GOES HERE -->
        <!-- YOU CAN KEEP THE TRIGGER HERE ALSO -->
      </div>
    </div>
</div>
```

### Trigger
```hbs
<button  {{eoc-sidebar-trigger "st-effect-slide-in-on-top"}}>Slide in on top</button>
```


For the following transitions , you need to add an additional wrapping `div class="st-pusher"` to make the transitions work properly.
- st-effect-push
- st-effect-rotate-pusher
- st-effect-3d-rotate-in
- st-effect-3d-rotate-out
- st-effect-delayed-3d-rotate

```hbs
<div id="st-container" class="st-container">
<div class="st-pusher">
  <EocSidebar @effect="st-effect-1">
    <h2 class="icon icon-lab">Sidebar</h2>
    <ul>
      <li><a class="icon icon-data" href="#">Data Management</a></li>
      <li><a class="icon icon-location" href="#">Location</a></li>
      <li><a class="icon icon-study" href="#">Study</a></li>
      <li><a class="icon icon-photo" href="#">Collections</a></li>
      <li><a class="icon icon-wallet" href="#">Credits</a></li>
    </ul>
  </EocSidebar>


    <div class="st-content"><!-- this is the wrapper for the content -->
      <div class="st-content-inner"><!-- extra div for emulating position:fixed of the menu -->
        <!-- YOUR MAIN CONTENT GOES HERE -->
        <!-- YOU CAN KEEP THE TRIGGER HERE ALSO -->
      </div>
    </div>
</div>
</div>
```

See the `dummy` app for more detailed code on how to use this component.

## Styles
Ember off-canvas sidebar come with about 14 different transitions for the sidebar. 
Just give any one of the following values for the *eoc-sidebar-trigger* modifier of the trigger element.
- st-effect-slide-in-on-top (default)
- st-effect-reveal
- st-effect-3d-rotate-in
- st-effect-3d-rotate-out
- st-effect-delayed-3d-rotate
- st-effect-fall-down
- st-effect-open-door
- st-effect-push
- st-effect-reverse-slide-out
- st-effect-rotate-pusher
- st-effect-scale-down-pusher
- st-effect-scale-rotate-pusher
- st-effect-scale-up
- st-effect-slide-along

## Configuring
Add a configuration for `ember-off-canvas-sidebar` to include only the transitions that you will use.
```js
ENV['ember-off-canvas-sidebar'] = {
  includedTransitions: ['st-effect-open-door', 'st-effect-fall-down'],
  excludedTransitions: ['st-effect-scale-up'],
  excludeBaseStyles: false, // defaults to false
  defaultTransition: 'st-effect-slide-in-on-top',    // defaults to 'st-effect-slide-in-on-top'
};
```

To exclude or not include a transition, means that it's css styles will not be bundled with your application, thus not polluting your app.

> **Note:** including a blank array e.g. `includeTransitions: []` will not include any transitions, leaving
you to define your own transition styles. See the `vendor/ember-off-canvas-sidebar/transitions` directory
for reference.

> **Note:** you may also want to set `excludeBaseStyles: true` so that this addon doesn't include the styles
used by all the transitions.

A big Thanks to [Ilya Radchenko](https://github.com/knownasilya) for making this configuration possible to have
a small memory footprint of css in your app when you are using the addon.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

## Credits
* [Mary Lou](https://github.com/crnacura)
* [Ilya Radchenko](https://github.com/knownasilya)
