module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['mocha', 'chai'],

    reporters: ['progress', 'coverage'],

    files: [
      // libraries
      'bower_components/angular/angular.js',
      'bower_components/angular-bootstrap/ui-bootstrap.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-mocks/angular-mocks.js',

      // our app
      'src/ez-confirm.js',
      'dist/ez-confirm-tpl.js',

      // tests
      'test/mocks/*.js',
      'test/*Spec.js',
    ],

    preprocessors: {
      'src/ez-confirm.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'test/coverage/'
    },

    port: 9482,

    browsers: ['Chrome']
  });
};
