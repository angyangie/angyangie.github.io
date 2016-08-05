import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
    {
      title: "NimbleStack",
      url: "http://www.nimblestack.io",
      subtitle: "Full Stack Software Developer",
      dates: "June 2016 - Present",
      description: "Nimblestack specializes in emergent technology, simplifying and automating software. We develop software that makes other software, taking care of both frontend and backend development using Javascript, React.js, Node.js, and MongoDB."
    },
    {
      title: "SeaChange Capital Partners",
      url: "http://seachangecap.org",
      subtitle: "Associate & Fellow",
      dates: "May 2012 - June 2014",
      description: "SeaChange Capital Partners enables transactions that increase the impact of nonprofits while offering leveraged funding opportunities for donors. SeaChange manages a series of funds that make grants, loans, and investments."
    },
    {
      title: "Teach For America",
      url: "https://www.teachforamerica.org/",
      subtitle: "Bilingual Ancient History Teacher",
      dates: "May 2012 - June 2014",
      description: "Teach For America enlists high-achieving recent college graduates and professionals to teach in low-income communities throughout the United States."
    }
    // {
    //   title: "",
    //   subtitle: "",
    //   dates: "",
    //   description: "",
    //   tags: ""
    // },
    // {
    //   title: "",
    //   subtitle: "",
    //   dates: "",
    //   description: "",
    //   tags: ""
    // }
    ]
  }
});
