import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
    {
      title: "Should APIs Be Protected Under Copyright Law?",
      url: "https://medium.com/@_angieramirez/should-apis-be-protected-under-copyright-law-d6b04ccd8a8c#.dxq7d3bvv",
      image_url: "/images/gvo.jpeg",
      description: "Copyright law traces its origins to the invention of the printing press during the Holy Roman Empire (circa 1440), and became a legal…",
      type: "medium"
    },
    {
      title: "The MVC Framework — Simplified",
      url: "https://medium.com/@_angieramirez/the-mvc-framework-simplified-333b1fbed7a7#.7jw361ag4",
      image_url: "/images/MVC.jpeg",
      description: "Three weeks ago, I left a comfortable job in the social finance sector to enter a profession that requires more quantitative, spatial, and…",
      type: "medium"
    }
    ]

  // return $.ajax({
  //   url: "http://cors.io/?u=https://medium.com/feed/@_angieramirez",
  //   crossDomain:true,
  //   dataType:"xml"
  //   }).then(function(jsonData){
  //       var channel = jsonData.children[0].children[0];
  //       var posts = [];
  //       for(var x = 0; x < channel.children.length; x++){
  //         if (channel.children[x].tagName === "item") {
  //           var post = channel.children[x];
  //           var title = post.children[0].textContent;
  //           var description = post.children[1].textContent;
  //           var url = post.children[2].textContent;
  //           var date = post.children[5].textContent;
  //           posts.push({title:title, description:description, url:url, date:date, isBlogPost:true});

  //         }
  //       }
  //       return posts;
  //   });
  }
  // afterModel() {
  //   $(document).attr('title', 'Blog | Angie Ramirez');
  // }
});
