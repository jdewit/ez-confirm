'use_strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: [],
        commit: true,
        push: false,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json', 'bower.json']
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      src: {
        options: {
          node: true,
          globals: {
            it: true,
            beforeEach: true,
            expect: true,
            element: true,
            browser: true,
            module: true,
            spyOn: true,
            inject: true,
            repeater: true,
            describe: true,
            angular: true,
            jQuery: true
          }
        },
        files: {
          src: ['src/**/*.js', 'test/*.js']
        },
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: false
      },
      singleRun: {
        configFile: 'karma.conf.js',
        background: false,
        singleRun: true
      }
    },
    shell: {
      clearCoverage: {
        command: 'rm -rf test/coverage/*'
      }
    },
    ngtemplates:  {
      ezGridster:      {
        src:      'src/*.html',
        dest:     'dist/ez-confirm-tpl.js',
        options: {
          module: 'ez.confirm',
          url: function(url) { return url.replace('src/', ''); }
        }
      }
    },
    uglify: {
      options: {
        mangle: false,
        compress: true
      },
      dist: {
        files: {
          'dist/ez-confirm.min.js': ['src/**/*.js']
        }
      }
    },
    watch: {
      all: {
        files: ['Gruntfile.js', 'src/**/*', 'test/**/*.js'],
        tasks: ['default', 'karma:unit:run'],
        options: {
          livereload: 9090,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask('default', ['jshint', 'ngtemplates', 'uglify']);
  grunt.registerTask('dev', ['shell:clearCoverage', 'karma:unit:start', 'watch']);
  grunt.registerTask('test', ['karma:unit:singleRun']);
};
