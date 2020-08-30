'use strict';

module.exports = {
  name: require('./package').name,
  included: function(app, parentAddon) {
    let target = (parentAddon || app);

    // necessary for nested usage
    // parent addon should call `this._super.included.apply(this, arguments);`
    if(target.app) {
      target = target.app;
    }

    this.app = target;

    // Use configuration  to decide which theme css files
    // to import, thus not populating the user's app
    this.importTransitions(target);
    this._super.included.apply(this, arguments);
  },

  importTransitions: function(app) {
    const projectConfig = this.project.config(app.env);
    const config = projectConfig['ember-off-canvas-sidebar'] || {};
    let transitions = [];
    let excludedBaseStyles = false;

    if(config) {
      const allTransitions = [
        'st-effect-slide-in-on-top',
        'st-effect-reveal',
        'st-effect-3d-rotate-in',
        'st-effect-3d-rotate-out',
        'st-effect-delayed-3d-rotate',
        'st-effect-fall-down',
        'st-effect-open-door',
        'st-effect-push',
        'st-effect-reverse-slide-out',
        'st-effect-rotate-pusher',
        'st-effect-scale-down-pusher',
        'st-effect-scale-rotate-pusher',
        'st-effect-scale-up',
        'st-effect-slide-along',
      ];
      const included = config.includedTransitions;
      const excluded = config.excludedTransitions;

      excludedBaseStyles = config.excludeBaseStyles || false;

      if(included && Array.isArray(included)) {
        transitions = transitions.concat(included);
      } else {
        transitions = allTransitions;
      }

      if(excluded && Array.isArray(excluded)) {
        transitions = transitions.filter(function(theme) {
          return excluded.indexOf(theme) === -1;
        });
      }

      transitions = transitions.filter(function(theme) {
        return theme && allTransitions.indexOf(theme) !== -1;
      });
    }

    if(!excludedBaseStyles) {
      app.import('vendor/ember-off-canvas-sidebar/base.css');
    }

    transitions = transitions.length ? transitions : ['st-effect-slide-in-on-top'];

    transitions.forEach(function(t) {
      app.import('vendor/ember-off-canvas-sidebar/transitions/' + t + '.css');
    });
  }
};
