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
          src: ['src/*.js']
        },
      }
    },
    less: {
      options: {
        compress: true
      },
      styles: {
        files: {
          'dist/ez-confirm.min.css': ['src/*.less']
        }
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
        src: 'src/*.js',
        dest: 'dist/ez-confirm.min.js'
      }
    },
    watch: {
      all: {
        files: ['Gruntfile.js', 'src/**/*'],
        tasks: ['default'],
        options: {
          livereload: 9090,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask('default', ['jshint', 'ngtemplates', 'uglify', 'less']);
};
