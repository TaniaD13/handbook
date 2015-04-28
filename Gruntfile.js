module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'nested'
                },
                files: {
                    'style.css': ['css/main.scss']
                }
            }
        },

        uglify: {
            build: {
                options: {
                    mangle: false
                },
                files: {
                    'dist/js/app.min.js': ['src/components/jquery/dist/jquery.js']
                }
            }
        },

        jekyll: {
            options: {                          
                src: '.'
            },
            dist: {
                options: {
                    dest: './_site',
                    config: '_config.yml'
                }
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            sass: {
                files: ['_sass/*.{scss,sass}'],
                tasks: ['sass', 'jekyll'],
                options: {
                    spawn: false,
                }
            },

            html: {
                files: ['*.html', '_includes/*.html', '_layouts/*.html', '*/*.html'],
                tasks: ['jekyll'],
                options: {
                    spawn: false,
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 4000,
                    base: '_site'
                }
            }
        },
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['uglify', 'sass', 'jekyll']);
    grunt.registerTask('js', ['uglify']);
    grunt.registerTask('server', ['connect', 'watch']);
};