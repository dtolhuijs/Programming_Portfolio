module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    // copy file from library
    var fileList = ["FrontEnd/Scss/*.scss"];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            prod: {
                options: {
                    sourcemap: 'auto',
                    style: 'compressed'
                },
                files: {
                    'www/css/styles.min.css': 'FrontEnd/Scss/styles.scss',
                }
            },
            dev: {
                options: {
                update: true
                },
                files: {
                    'www/css/styles.css': 'FrontEnd/Scss/styles.scss',
                }
            }
        },
        // babel: {
        //     prod: {
        //         options: {
        //             sourceMap: true,
        //             minified: true,
        //             presets: ['env']
        //         },
        //         files: {
        //             'www/js/main.min.js': 'src/FrontEnd/js/main.js'
        //         }
        //     },
        //
        //     dev: {
        //         options: {
        //             presets: ['env']
        //         },
        //         files: {
        //             'www/js/main.js': 'src/FrontEnd/js/main.js'
        //         }
        //     }
        // },
        // clean: ['www/assets/js/*'],
        watch: {
            scripts: {
                files: fileList,
                tasks: ['sass:dev'],
                options: {
                    spawn: false,
                },
            },
        },

    });


    grunt.registerTask('development', ['clean','sass:dev', 'babel:dev']);
    grunt.registerTask('production', ['clean','sass:prod', 'babel:prod']);

};