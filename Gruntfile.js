module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        // TODO show how to override node_modules, universal, and repoURL
    });

    grunt.loadNpmTasks("grunt-gpii");

    grunt.registerTask('buildall', "Build the entire GPII", function() {
        grunt.task.run("gpiiUniversal"); 
    }); 
};
