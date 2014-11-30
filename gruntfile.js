/// <binding BeforeBuild='less' AfterBuild='less' />
// This file in the main entry point for defining grunt tasks and using grunt plugins.
// Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409

module.exports = function (grunt) {



  grunt.initConfig({


    pkg: grunt.file.readJSON('package.json'),




    bower: {
      install: {
        options: {
          targetDir: "Scripts",
          layout: "byComponent"
          //cleanTargetDir: true

        }
      }
    },




    concat: {
      options: {
        separator: ';'
      },
      install: {
        src: [
       // 'bower_components/jquery/dist/jquery.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/angular-route/angular-route.min.js'
        ],
        dest: 'Scripts/sitescripts.js'
      },
      dist: {
        src: ['dev/*.js','dev/nonApp/*.js'],
        dest: 'Scripts/nonApp.js'
      },
      angularApp: {
        src: ['dev/app/*.js'],
        dest: 'app/app-main.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'Scripts/nonApp.min.js': ['<%= concat.dist.dest %>']
        }
      },
      angularApp: {
        files: {
          'app/app-main.min.js':['<%= concat.angularApp.dest %>']
        }
      }
    },


    jshint: {
      files: ['Gruntfile.js', 'dev/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },


    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: { "Content/site.css": "sass/site.scss" }
      }
    },



    compass: {
     options: {
      config: 'config.rb'
    },
    dist: {
      options: {
        // sassDir: 'sass',
        //cssDir: 'wwwroot/stylesheets'
      }
    }
  },

  connect: {
    server: {
      options: {
        port: 9001,
        hostname: 'localhost',
        base: '',
        keepalive:true
      }
    } 

  },



  watch: {
    options: { 
livereload: true 

    },
    js: { 
      files: ['<%= jshint.files %>' ],
      tasks: ['jshint','concat:dist', 'concat:angularApp' ,'uglify'],
      options:{
       reload: true//,
      // livereload: true 
     },
   },
   css: {
    files: ['index.html' ,'app/**/*.html' , 'sass/*.scss'],
    tasks: ['compass'],
    options: {
     // livereload: true,
    },
  },
  html: {
    files: ['index.html' ,'app/**/*.html' ,'Content/*.css'],
      //tasks: ['compass'],
      options: {
        //livereload: true,
      },
    },

  }




});



    // The following line loads the grunt plugins.


    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
   // grunt.loadNpmTasks('grunt-wiredep'); 

   grunt.loadNpmTasks("grunt-bower-task");


   grunt.loadNpmTasks("grunt-contrib-sass");
   grunt.loadNpmTasks('grunt-contrib-compass');

    // Grunt Tasks;
    grunt.registerTask("default", ["bower:install" , "concat"]);
    grunt.registerTask("serve", ["connect"]);
    grunt.registerTask("css", ["watch:css"]);
    grunt.registerTask("html", ["watch:html"]);




  };