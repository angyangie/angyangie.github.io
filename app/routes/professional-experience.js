import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        title: "BuzzFeed",
        url: "https://www.buzzfeed.com/",
        subtitle: "Backend Software Engineer, Video",
        dates: "October 2016 - Present",
        description: "BuzzFeed is a leading independent digital media company delivering news and entertainment to hundreds of millions of people around the world."
      },
    {
      title: "NimbleStack",
      url: "http://www.nimblestack.io",
      subtitle: "Full Stack Software Developer",
      dates: "June 2016 - September 2016",
      description: "NimbleStack specializes in emergent technology, simplifying and automating software. At NimbleStack, I develop front-end and back-end of chatbots using Javascript, React.js, Redux, NodeJS, and MongoDB. I integrate Facebook, Gmail, IBM Watson, and other machine learning/artificial intelligence APIs into chatbots."
    },
    {
      title: "SeaChange Capital Partners",
      url: "http://seachangecap.org",
      subtitle: "Associate & Fellow",
      dates: "May 2012 - June 2014",
      description: "SeaChange Capital Partners enables transactions that increase the impact of nonprofits while offering leveraged funding opportunities for donors. SeaChange manages a series of funds that make grants, loans, and investments. At SeaChange, I set-up, managed, and maintained salesforce data management system and SeaChange website. I assisted in financial modeling, restructuring, and strategy assessment for nonprofits considering significant transactions, including restructurings, growth capital campaigns, and site replications. I also sourced and recommend early stage, high-potential, underfunded programs and new technology initiatives for future investment by the Heckscher Foundation for Children ($300 million in net assets)."
    },
    {
      title: "Teach For America",
      url: "https://www.teachforamerica.org/",
      subtitle: "Bilingual Ancient History Teacher",
      dates: "May 2012 - June 2014",
      description: "Teach For America (TFA) enlists high-achieving recent college graduates and professionals to teach in low-income communities throughout the United States. As a TFA Corps Member, I analyzed trends in student test and classroom performance data to inform and influence future pedagogical decisions, using education technology tools like Remind101, ClassDojo, JumpRope, Achieve3000, and PowerSchool. I self-developed class website, lesson plans, class materials, and curriculum for 125 students a year in Spanish and English."
    }
    ]
  }
});
