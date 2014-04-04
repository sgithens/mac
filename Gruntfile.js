module.exports = function(grunt) {
    var node_modules = "../node_modules";
    var universal = "../node_modules/universal";
    var repoURL = "git://github.com/GPII/universal.git";
    var startDir = process.cwd();
    var shellOptions = {
        stdout: true,
        stderr: true
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        shell: {
            gitClone: { 
                options: shellOptions,
                command: function() {
                    return 'git clone ' + repoURL + " " + universal; 
                }
            },
            npmInstall: {
                options: {
                    stdout: true,
                    stderr: true,
                    execOptions: {
                        cwd: universal
                    }
                },
                command: function() {
                    return 'npm install';
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('buildall', "Build the entire GPII", function() {
        grunt.file.mkdir(node_modules);
        grunt.task.run("shell:gitClone");
        grunt.task.run("shell:npmInstall");
    }); 
};
