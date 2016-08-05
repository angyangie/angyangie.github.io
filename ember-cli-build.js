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


    app.import("vendor/stylesheets/bootstrap.min.css")
    app.import("vendor/stylesheets/main.css")
    app.import("vendor/stylesheets/green.css")
    app.import("vendor/stylesheets/owl.carousel.css")
    app.import("vendor/stylesheets/owl.transitions.css")
    app.import("vendor/stylesheets/animate.min.css")
    
    // <link href="http://fonts.googleapis.com/css?family=Lato:400,900,300,700" rel="stylesheet">
    // <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,400italic,700italic" rel="stylesheet">
  
    app.import("vendor/images/favicon.ico")
    app.import("vendor/images/logoAR.png")
    app.import("vendor/images/profile-pic.jpg")
    app.import("vendor/images/Logo2.png")
    app.import("vendor/images/battleship.png")
    app.import("vendor/images/lemmen.png")
    app.import("vendor/images/mapping.png")

    
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
    app.import("vendor/javascript/owl.carousel.min.js")
    app.import("vendor/javascript/jquery.isotope.min.js")
    app.import("vendor/javascript/jquery.easytabs.min.js")
    app.import("vendor/javascript/google.maps.api.v3.js")
    app.import("vendor/javascript/viewport-units-buggyfill.js")
    app.import("vendor/javascript/scripts.js")

    //can be removed??

     app.import("vendor/stylesheets/green.css")
     app.import("vendor/stylesheets/blue.css")
     app.import("vendor/stylesheets/red.css")
     app.import("vendor/stylesheets/pink.css")
     app.import("vendor/stylesheets/purple.css")
     app.import("vendor/stylesheets/orange.css")
     app.import("vendor/stylesheets/navy.css")
     app.import("vendor/stylesheets/gray.css")

     app.import("vendor/javascript/switchstylesheet.js")


  return app.toTree();
};
