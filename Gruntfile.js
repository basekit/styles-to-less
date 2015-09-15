module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json') 
  });

  grunt.loadNpmTasks('grunt-json');
  
  // Default task(s).
  grunt.registerTask('build', function () { 	
    
    var template = grunt.option('template') || 'variable-template'
        json = grunt.file.readJSON('../../../templates/' + template + '/metadata.json'),
        styles = json.styles,
        variableString = '';

        for (var category in styles) {
          if (styles.hasOwnProperty(category)) {
            for (var variable in styles[category]) {
              if (styles[category].hasOwnProperty(variable)) {
                variableString += '@' + variable + ':' + styles[category][variable] + ';\n';
              }
            }
          }
        }

        grunt.file.write('../../../templates/' + template + '/bk-v8-test.less', variableString);
    });
};

