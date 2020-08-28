ember-off-canvas-sidebar
==============================================================================

![Build and Deploy](https://github.com/rajasegar/ember-addon-template/workflows/Build%20and%20Deploy/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-addon-template/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-addon-template?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](http://img.shields.io/npm/v/ember-addon-template.svg?style=flat)](https://npmjs.org/package/ember-addon-template "View this project on npm")
[![EmberObserver](http://emberobserver.com/badges/ember-addon-template.svg?branch=master)](http://emberobserver.com/addons/ember-addon-template)


Ember addon for off-canvas sidebar menu with transitions.



Installation
------------------------------------------------------------------------------

```
ember install ember-off-canvas-sidebar
```


Usage
------------------------------------------------------------------------------

### Menu
```hbs
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
```

### Trigger
```hbs
<button data-effect="st-effect-1" {{eoc-sidebar-trigger "st-effect-1"}}>Slide in on top</button>
```

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
