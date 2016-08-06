/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  'ember-bootstrap': {
      'importBootstrapTheme': true
    },
    favicon: {
      config: {
      }
    },
  });


    app.import("vendor/stylesheets/main.css")
    app.import("vendor/stylesheets/animate.min.css")
  
    app.import("vendor/images/favicon.ico")
    app.import("vendor/images/logoAR.png")
    app.import("vendor/images/profile-pic.jpg")
    app.import("vendor/images/Logo2.png")
    app.import("vendor/images/battleship.png")
    app.import("vendor/images/lemmen.png")
    app.import("vendor/images/mapping.png")
    app.import("vendor/images/gvo.jpeg")
    app.import("vendor/images/MVC.jpeg")

    
    app.import("vendor/javascript/html5shiv.js")
    app.import("vendor/javascript/respond.min.js")
    app.import("vendor/javascript/jquery.min.js")
    app.import("vendor/javascript/jquery.easing.1.3.min.js")
    app.import("vendor/javascript/jquery.form.js")
    app.import("vendor/javascript/jquery.validate.min.js")
    app.import("vendor/javascript/bootstrap.min.js")
    app.import("vendor/javascript/bootstrap-hover-dropdown.min.js")
    app.import("vendor/javascript/skrollr.min.js")
    app.import("vendor/javascript/skrollr.stylesheets.min.js")
    app.import("vendor/javascript/waypoints.min.js")
    app.import("vendor/javascript/waypoints-sticky.min.js")
    app.import("vendor/javascript/jquery.isotope.min.js")
    app.import("vendor/javascript/jquery.easytabs.min.js")
    app.import("vendor/javascript/viewport-units-buggyfill.js")
    app.import("vendor/javascript/scripts.js")

     app.import("vendor/javascript/switchstylesheet.js")


  return app.toTree();
};
