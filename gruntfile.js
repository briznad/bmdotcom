/**
 * Grunt configuration for aWindowNYC
 **/
module.exports = function(grunt) {
    'use strict';

    // load all plugins
    require('matchdep').filterDev('grunt-*').forEach(function(obj) {
        console.log(obj);
        grunt.loadNpmTasks(obj);
    });

    // project configuration
    grunt.initConfig({
        config: {
            htmlInput: 'assets/html/',
            buildOutput: 'docs/',
            sassInput: 'assets/sass/',
            cssOutput: 'docs/assets/css/',
            jsInput: 'assets/js/',
            jsOutput: 'docs/assets/js/',
            imagesInput: 'assets/images',
            imagesOutput: 'docs/assets/images/',
            fontsInput: 'assets/fonts',
            fontsOutput: 'docs/assets/fonts/',
            pdfInput: 'assets/pdf',
            pdfOutput: 'docs/assets/pdf/',
            feedsInput: 'assets/feeds',
            feedsOutput: 'docs/assets/feeds/',
            metaInput: 'meta',
            bower: 'bower_components/'
        },

        clean: {
            html: {
                src: ['<%= config.buildOutput %>*.html'],
                options: {
                    force: true
                }
            },
            css: {
                src: ['<%= config.cssOutput %>*.css'],
                options: {
                    force: true
                }
            },
            js: {
                src: ['<%= config.jsOutput %>*.js*'],
                options: {
                    force: true
                }
            },
            assets: {
                src: [
                    '<%= config.imagesOutput %>*',
                    '<%= config.fontsOutput %>*',
                    '<%= config.pdfOutput %>*',
                    '<%= config.feedsOutput %>*'
                ],
                options: {
                    force: true
                }
            }
        },

        // html tasks
        htmlbuild: {
            prod: {
                src: '<%= config.htmlInput %>index.html',
                dest: '<%= config.buildOutput %>',
                options: {
                    parseTag: 'include',
                    logOptions: true,
                    allowUnknownTags: true,
                    sections: {
                        partials: {
                            meta: '<%= config.htmlInput %>/partials/meta.html',
                            header: '<%= config.htmlInput %>/partials/header.html',
                            footer: '<%= config.htmlInput %>/partials/footer.html'
                        },
                        modules: {
                            root: '<%= config.htmlInput %>/modules/root.html'
                        }
                    },
                    scripts: {
                        ga: '<%= config.jsInput %>individual/min/ga.js',
                        logTime: '<%= config.jsInput %>individual/min/logTime.js',
                        viewport: '<%= config.jsInput %>individual/min/viewport.js',
                        loadingClass: '<%= config.jsInput %>individual/min/loadingClass.js'
                    }
                }
            }
        },

        htmlmin: {
            prod: {
                options: {
                    removeComments: false,
                    collapseWhitespace: true
                },
                files: {
                    '<%= config.buildOutput %>index.html': '<%= config.buildOutput %>index.html',
                    '<%= config.buildOutput %>404.html': '<%= config.htmlInput %>404.html'
                }
            },
        },

        // sass/css tasks
        sass: {
            prod: {
                options: {
                    sourceMap: false,
                    includePaths: [
                        '<%= config.bower %>',
                        '<%= config.sassInput %>*/'
                    ],
                    outputStyle: 'nested'
                },
                files: {
                    '<%= config.cssOutput %>style.css': '<%= config.sassInput %>style.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 5 version', 'ie >= 8']
            },
            prod: {
                src: '<%= config.cssOutput %>style.css'
            }
        },

        cssmin: {
            prod: {
                files: {
                    '<%= config.cssOutput %>style.min.css': '<%= config.cssOutput %>style.css'
                }
            }
        },

        // js tasks
        'template-module': {
            prod: {
                options: {
                    module: false,
                    provider: 'underscore',
                    prettify: true,
                    prettifyOptions: {
                        indentSize: 4,
                        indentChar: '\t',
                        maxPreserveNewlines: 1
                    },
                    namespace: 'bmdotcom.templates',
                    processName: function(filename) {
                        // remove ".html" from filename
                        // then remove path from filename by splitting on forward slash and returning the last item in the created array
                        // then afix "View" to end of filename
                        return filename.replace(/\.html$/, '').split(/\//).slice(-1)[0] + 'View';
                    }
                },
                files: {
                    '<%= config.jsInput %>component/templates.js': ['<%= config.htmlInput %>/modules/*.html']
                }
            }
        },

        concat: {
            options: {
                stripBanners: true,
                separator: ';'
            },
            js: {
                src: [
                    // list js dependencies (managed via bower)
                    '<%= config.bower %>jquery/dist/jquery.js', // jQuery must be the first plugin loaded, as it's depended by jQuery plugins as well as Davis.js
                    '<%= config.bower %>davis/davis.js',
                    '<%= config.bower %>underscore/underscore.js',
                    // custom app js
                    '<%= config.jsInput %>component/*.js'
                ],
                dest: '<%= config.jsOutput %>do.js'
            }
        },

        uglify: {
            component: {
                options: {
                    sourceMap: true,
                    beautify: false,
                    report: false,
                    mangle: true,
                    compress: {
                        warnings: true
                    }
                },
                files: {
                    '<%= config.jsOutput %>do.min.js': '<%= config.jsOutput %>do.js'
                }
            },
            individual: {
                options: {
                    sourceMap: false,
                    beautify: false,
                    report: false,
                    mangle: false,
                    compress: {
                        warnings: true
                    }
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.jsInput %>individual/',
                    src: '*.js',
                    dest: '<%= config.jsInput %>individual/min/'
                }]
            }
        },

        copy: {
            images: {
                expand: true,
                cwd: '<%= config.imagesInput %>',
                src: '**',
                dest: '<%= config.imagesOutput %>'
            },
            fonts: {
                expand: true,
                cwd: '<%= config.fontsInput %>',
                src: '**',
                dest: '<%= config.fontsOutput %>'
            },
            pdf: {
                expand: true,
                cwd: '<%= config.pdfInput %>',
                src: '**',
                dest: '<%= config.pdfOutput %>'
            },
            feeds: {
                expand: true,
                cwd: '<%= config.feedsInput %>',
                src: '**',
                dest: '<%= config.feedsOutput %>'
            },
            meta: {
                expand: true,
                cwd: '<%= config.metaInput %>',
                src: '**',
                dest: '<%= config.buildOutput %>'
            }
        },

        watch: {
            // whenever html is changed…
            html: {
                files: '<%= config.htmlInput %>**/*.html',
                tasks: ['html']
            },
            // whenever a scss file is changed…
            sass: {
                files: '<%= config.sassInput %>**/*.scss',
                tasks: ['css']
            },
            // whenever a js file is changed…
            js: {
                files: '<%= config.jsInput %>**/*.js',
                tasks: ['js', 'html']
            }
        },

        notify_hooks: {
            options: {
                enabled: true,
                success: false, // whether successful grunt executions should be notified automatically
                duration: 3 // the duration of notification in seconds, for `notify-send only
            }
        },

        notify: {
            done: {
                options: {
                    title: 'Grunt Complete',  // optional
                    message: 'all tasks finished successfully', //required
                }
            }
        }
    });

    // default task
    grunt.registerTask('default', ['clean', 'template-module', 'concat', 'uglify', 'sass', 'autoprefixer', 'cssmin', 'htmlbuild', 'htmlmin', 'copy', 'notify']);

    // component tasks
    grunt.registerTask('html', ['template-module', 'concat', 'uglify:component', 'clean:html', 'htmlbuild', 'htmlmin', 'notify']);
    grunt.registerTask('css', ['clean:css', 'sass', 'autoprefixer', 'cssmin', 'notify']);
    grunt.registerTask('js', ['clean:js', 'template-module', 'concat', 'uglify', 'notify']);
    grunt.registerTask('meta', ['copy:meta', 'notify']);
    grunt.registerTask('assets', ['clean:assets', 'copy:images', 'copy:fonts', 'copy:pdf', 'copy:feeds', 'notify']);
};
