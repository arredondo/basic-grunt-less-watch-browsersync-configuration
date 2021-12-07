module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    sourceMap: true,
                    optimization: 2
                },
                files: { // destination file and source file
                    "public/css/base.css": "public/less/base.less",
                }
            }
        },
        watch: {
            less: {
                files: [
                    'public/less/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'public/css/*.css'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: "basicglwbconfiguration.local"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['less', 'browserSync', 'watch']);
};