var rootFiles = {
  js: ['public/root/app.js', 'public/root/**/*.js', '!public/root/**/*.min.js'],
  css: ['public/root/assets/css/*.css', '!public/root/**/*.min.css']
};

module.exports = function(grunt) {

  grunt.initConfig({

    env: {
      dev: {
        src: ".env"
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

  });

  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['env:dev', 'nodemon']);

};
