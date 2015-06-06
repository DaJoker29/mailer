module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        express: {
            options: {
                logs: {
                    out: 'out.log',
                    err: 'err.log'
                }
            },
            dev: {
                options: {
                    script: 'server.js',
                    node_env: 'dev',
                    debug: 'true'
                }
            },
            prod: {
                options: {
                    script: 'server.js',
                    node_env: 'prod'
                }
            }
        },
        watch: {
            express: {
                files: ['**/*.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('start', 'Start server', []);
    grunt.registerTask('default', 'Start server with watch', ['express:dev', 'watch' ]);

};