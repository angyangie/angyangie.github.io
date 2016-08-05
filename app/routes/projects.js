import Ember from 'ember';

export default Ember.Route.extend({
   model() {
    return [
    { 
      title: "Mapping The News",
      url: "http://mapping-the-news.herokuapp.com/",
      image_url: "/images/mapping.png",
      description: "Mapping the News (MTN) is a Rails web app that displays articles on a map based on geographical location. MTN pulls the top ten news articles for 181 countries from the IBM Watson AlchemyData News API. MTN uses MapBox GL for map functionality and the WrapBootstrap Semantic theme/custom CSS for front-end design.",
       tags: ["Rails", "Javascript", "RestClient", "Ajax", "CSS", "MapBox GL", "jQuery", "Postgresql", "Heroku", "Bootstrap"]
    },
    {
      title: "Lemmen",
      url: "http://lemmen.herokuapp.com",
      image_url: "/images/lemmen.png",
      description: "Lemmen is a Rails personal finance and budgeting web app. Lemmen uses the Plaid Financial data API to pull user bank account information, ActiveRecord and the L-tree Hierarchy gem to model relationships, and  Bootstrap, custom CSS, and Wrapbootstrap SpaceLab theme for front-end design.",
      tags: ["Rails", "Javascript", "RestClient", "Ajax", "CSS", "PlaidAPI", "jQuery", "Postgresql", "Heroku", "ActiveRecord", "L-tree gem"]
    },
    {
      title: "Out of the Water",
      url: "http://out-of-the-water.herokuapp.com",
      image_url: "/images/battleship.png",
      description: "Out of the Water (OW) is an Ember and Rails Battleship web game app. OW has its own AI that responds to player input, ship locations, and successful/unsuccessful plays. OW and its Rails API were built using Rails-API gem, ActiveModel serializers and the JSON API adapter, and Record Mixin and Ember Serializers.",
      tags: ["EmberJS", "Rails", "ActiveModel", "Heroku", "Javascript", "Ajax"]
    }
    ]
}});
