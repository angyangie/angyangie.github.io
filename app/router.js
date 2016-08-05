import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about',  { path: '/' });
  this.route('projects');
  this.route('professional-experience');
  this.route('publications');
  this.route('nav-bar');
});

export default Router;
