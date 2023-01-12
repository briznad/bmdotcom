var bmdotcom;

bmdotcom = bmdotcom || {};

bmdotcom.modelBuildr = (function() {
  'use strict';
  var init, _addContactModel, _addProjectsModel, _addResumeModel;
  init = function(callback) {
    bmdotcom.model = {};
    bmdotcom.model.pages = {};
    bmdotcom.model.settings = {
      currentPage: {
        title: 'root'
      }
    };
    bmdotcom.model.pages.projects = _addProjectsModel();
    bmdotcom.model.pages.resume = _addResumeModel();
    bmdotcom.model.pages.contact = _addContactModel();
    return callback();
  };
  _addProjectsModel = function() {
    return [
      {
        title: 'Thrillist Media Group',
        link: 'http://www.thrillistmediagroup.com/',
        media: 'thrillistmediagroup_sample.png',
        description: 'I built the corporate identity site for Thrillist Media Group, making use of CSS animation and transitions to spice up the usual advertising, executives, career, and tech blog sections.',
        keywords: ['HTML/CSS/JS', 'CSS3', 'HTML5', 'SASS', 'blog']
      }, {
        title: 'aWindowNYC',
        link: 'http://www.awindownyc.com/',
        media: 'awindow_sample.png',
        description: 'Serving as the purchasing and information portal for an experimental retail concept, I built a website upon a custom frontend js framework, utilizing Google Docs as a lightweight CMS, and with full purchase funnel but requiring no costly backend servers.',
        keywords: ['HTML/CSS/JS', 'CSS3', 'HTML5', 'SASS', 'Davis.js', 'ecommerce', 'Stripe', 'Google Docs API', 'Grunt']
      }, {
        title: 'shapeDance',
        link: 'http://shapedance.beautifuluniquesnowflake.com/',
        media: 'shapeDance_sample.png',
        description: 'I make shapes dance, set to music. This was an exercise to master CSS3 transforms, transitions, and animations, while using a minimum of DOM elements.',
        keywords: ['HTML/CSS/JS', 'CSS3', 'SASS']
      }, {
        title: 'bouncingBubbles',
        link: 'http://bouncingbubbles.beautifuluniquesnowflake.com/',
        media: 'bouncingBubbles_sample.png',
        description: 'An experiment in adding physical properties to DOM elements, with appearance and behavior affected by the user\'s current weather.',
        keywords: ['HTML/CSS/JS', 'CSS3', 'SASS', 'Box2DJS', 'GeoIP API', 'Forecast.io API']
      }, {
        title: 'Oracle of 8',
        link: 'http://8ball.beautifuluniquesnowflake.com/',
        media: '8ball_sample.png',
        description: 'I created an online version of the classic <a href="http://en.wikipedia.org/wiki/Magic_8-Ball">Magic 8-Ball</a>, partly as a gift to my girlfriend and partly as a vehicle to explore CSS animations. The Oracle of 8 will answer any yes/no question and can anonymously log the question and answer to its own Twitter account, <a href="http://twitter.com/oracleof8">@OracleOf8</a>.',
        keywords: ['HTML/CSS/JS', 'CSS3', 'SASS', 'Bootstrap', 'jQuery', 'Twitter API']
      }, {
        title: 'Intuit QuickNav',
        link: 'http://www.intuit.com/',
        media: 'Intuit_QuickNav_sample.png',
        description: 'Replacing what was previously bulky and overly-complex, I developed a new header used across Intuit.com. With speed a high priority, I worked closely with the Intuit design team to move away from cross-browser "pixel perfection". Instead we took advantage of CSS3 to progressively enhance the visual design, while making sure older browsers still enjoyed a completely usable experience; a first for Intuit.',
        keywords: ['HTML/CSS/JS', 'CSS3', 'performance tuning', 'accessibility']
      }, {
        title: 'Intuit Performance Overhaul',
        link: 'http://www.webpagetest.org/result/130129_H7_P5T/',
        media: 'Intuit_Perf_sample.png',
        description: 'As part of a small consulting team I performed a performance overhaul on Intuit.com - ranked in the US Top 100 by <a href="http://www.alexa.com/siteinfo/intuit.com">Alexa</a> - as well as Intuit\'s 50 other most frequented pages. We accomplished a halving of page load times, driving a marked increase in growth.',
        keywords: ['HTML/CSS/JS', 'performance analysis', 'performance tuning', 'intense refactoring', 'build automation', 'accessibility']
      }, {
        title: 'Pyxera',
        link: 'http://www.pyxera.com/',
        media: 'Pyxera_sample.png',
        description: 'I worked closely with the design firm <a href="http://hoffmanchrisman.com/">Hoffman Chrisman</a> to develop a site for a medical consulting agency, incorporating a unique animated navigation system.',
        keywords: ['HTML/CSS/JS', 'SASS', 'Bootstrap', 'jQuery', 'side scroll']
      }, {
        title: 'BdayMindr',
        link: false,
        media: 'BdayMindr_sample.png',
        description: 'Create a list of friends and family, along with their respective birthdays (or sign up via Facebook and have the list pre-populated for you). Then, prior to a friend\'s birthday, you\'ll be sent a reminder. What you do with this information is up to you.',
        keywords: ['NodeJS', 'CouchDB', 'Facebook Connect', 'jQuery', 'Hasher.js', 'Bootstrap', 'jQueryUI', 'Express.js', 'HTML/CSS/JS']
      }, {
        title: 'Noike: The Book',
        link: 'http://www.noikethebook.com/',
        media: 'Noike_sample.png',
        description: 'A PSD to HTML/CSS website build-out, to promote the publication of a book.',
        keywords: ['HTML/CSS/JS', 'jQuery']
      }, {
        title: 'former BradMallow.com',
        link: 'http://archive.bradmallow.com/',
        media: 'bradmallow_com_sample.png',
        description: 'Though existing now for posterity, I originally built this site shortly after the first tablets came to market, as I was intrigued by the merging of traditional web design with the smaller, app-centric world of tablet computing.',
        keywords: ['HTML/CSS/JS', 'jQuery', 'CSS3', 'side scroll', 'Tumblr API']
      }, {
        title: 'SLT Remix',
        link: false,
        media: 'SLT_Remix_sample.png',
        description: 'The SLT (Safe Login Toolbar) Remix was a tool I developed to help the tech support and community management teams at Ning.com quickly tackle common social network adminstration tasks. It is still in use today.',
        keywords: ['HTML/CSS/JS', 'jQuery', 'jQueryUI']
      }, {
        title: 'Love and Theft Fans',
        link: false,
        media: 'Love_and_Theft_sample.png',
        description: 'A PSD to HTML/CSS adaptation for a band\'s fan network on the Ning platform.',
        keywords: ['HTML/CSS/JS', 'social network']
      }, {
        title: 'Caroline\'s Comedy Community',
        link: false,
        media: 'Carolines_Comedy_sample.png',
        description: 'I built out the community portal for patrons and fans of Caroline\'s Comedy Club.',
        keywords: ['HTML/CSS/JS', 'social network']
      }, {
        title: 'Fraiche Yogurt',
        link: 'http://fraicheyogurt.com/',
        media: 'Fraiche_sample.png',
        description: 'After correcting a previous design that had gone off the rails, I developed and deployed the original web presence for a local retail startup, under a tight deadline.',
        keywords: ['HTML/CSS']
      }
    ];
  };
  _addResumeModel = function() {
    return {
      meta: {
        name: 'Brad Mallow',
        email: 'contact@bradmallow.com',
        phone: {
          countryCode: '1',
          areaCode: '858',
          number: '205-8052'
        },
        website: 'https://bradmallow.com'
      },
      summary: 'I am a founder, product leader, engineering manager, and software developer with extensive experience crafting businesses, applications, and services. I am passionate about exposing complicated information through thoughtful interfaces. I enjoy utilizing my skills, both technical and personal, to build quality products and foster great teams.',
      education: [
        {
          school: 'University of California, Santa Cruz',
          degree: {
            type: 'B.A.',
            subject: 'Film & Digital Media'
          },
          graduationYear: '2006'
        }
      ],
      skills: ['making something from nothing', 'engineering management', 'development & deployment workflows', 'performance optimization', 'web accessibility', 'rapid prototyping'],
      experience: [
        {
          title: 'Co-Founder & CTO',
          organization: 'Thrilling',
          location: 'Los Angeles, California',
          period: {
            start: 'August 2018',
            end: 'December 2022'
          },
          description: 'Along with my partner, Shilla Kim-Parker, I founded Thrilling, an online marketplace for vintage clothing, apparel, and home goods. We partnered with 1800+ independent vintage and secondhand clothing stores in the US and Canada to list over 300k+ unique items.',
          achievements: ['Completed the Urban X and Elemental Excelerator programs to rapidly develop our initial concept and go-to-market strategies for B2C retail and B2B wholesale businesses.', 'Raised over $10 million dollars in pre-seed, seed, and series A funding. Investors included Prelude Ventures, Elemental Excelerator, Defy, Urban US, Phoenix Rising, Closed Loop, and Congruent Ventures.', 'Prototyped, launched, and scaled a business from nothing to over $1 million in annual recurring revenue.', 'Built out a team of more than 35 outstanding employees with inclusive and diverse backgrounds, including a product organization that I directly managed.', 'We achieved the ultimate validation with our own wikipedia page: <a href="https://en.m.wikipedia.org/wiki/Thrilling_(company)">https://en.m.wikipedia.org/wiki/Thrilling_(company)</a>']
        }, {
          title: 'Senior Manager Engineering',
          organization: 'Poppin',
          location: 'New York, New York',
          period: {
            start: 'August 2015',
            end: 'August 2016'
          },
          description: 'I ran the frontend ecom system and oversaw a successful replatforming. Transitioned to managing entire tech team, consisting of on-site and offshore team members, handling all technical needs of a rapidly growing startup selling physical goods to both B2B & B2C customers. This included ecom, ERP, sales management, and middleware systems to make it all work.',
          achievements: ['Completed a successful replatforming from an aging system that was inhibiting growth to a modern, full-feautured ecom solution.', 'Transitioned from static markup to fully accessible templates that could be administered by our internal clients, freeing up their creativity and my developer\'s time.']
        }, {
          title: 'Senior Interface Developer',
          organization: 'Thrillist Media Group',
          location: 'New York, New York',
          period: {
            start: 'July 2013',
            end: 'May 2015'
          },
          description: 'I developed modules and features in close collaboration with design and product teams, used across multiple editorial and ecommerce sites built upon Thrillist’s proprietary web application platform. As a senior member of the team I advocated a high standard of code quality and maintainability through active involvement in code reviews, and was also tasked with deploying code to production systems.',
          achievements: ['Led a special projects team of developers tasked with originating ideas around strategic company objectives and developing them into production-ready solutions.', 'Designed, prototyped, and implemented internal curation tools, providing editorial and merchandising teams granular control over content placement through an intuitive interface.', 'Built the corporate identity site (http://thrillistmediagroup.com) making use of CSS animation and transitions to spice up the usual advertising, executives, career, and tech blog sections.']
        }, {
          title: 'Frontend Developer',
          organization: 'Intuit',
          location: 'Menlo Park, California',
          period: {
            start: 'February 2012',
            end: 'March 2013'
          },
          description: 'As part of a small consulting team, I performed an overhaul on Intuit.com – an Alexa US Top 100 website - as well as Intuit\'s 50 other most-frequented pages, concentrating on performance, accessibility, frontend best practices, and optimizing for use on mobile devices.',
          achievements: ['Achieved a 50% reduction in page load times by refactoring HTML, CSS, and JavaScript, driving a marked jump in conversions in key growth areas.', 'Introduced an adaptive, mobile-optimized experience for key new pages and helped align the production life cycle around mobile.', 'Lead tech talks for the marketing and development groups, evangelizing the cause of performance and frontend best practices.', 'Audited and refactored Intuit’s top 50 pages to ensure compliance with accessibility best practices, allow all customers to enjoy a superb experience.']
        }, {
          title: 'Web Developer',
          organization: 'Freelance',
          location: 'San Francisco, California',
          period: {
            start: 'October 2011',
            end: 'February 2012'
          },
          description: 'Part of a two-man team, I created engaging web experiences using HTML5, CSS3, and JavaScript, helping clients tell their unique stories; worked with varied customers from an independent author promoting a new book to a medical-consulting startup working with an established design firm; fostered a fluid working relationship between development, designers, and the client.'
        }, {
          title: 'Support Engineer',
          organization: 'Atlassian',
          location: 'San Francisco, California',
          period: {
            start: 'August 2010',
            end: 'September 2011'
          },
          description: 'Provided high-touch technical support for mission-critical software development and communication tools, supporting customers of all sizes, from startups to Fortune 100s, using a number of communication channels – support tickets, online forums, telephone – across all major operating systems and DB setups – MySQL, PostgreSQL, Oracle, Solaris; developed productivity tools integrating our admin and ticketing systems using HTML5, CSS3, and JavaScript.'
        }, {
          title: 'Community Advocate',
          organization: 'Ning',
          location: 'Palo Alto, California',
          period: {
            start: 'February 2008',
            end: 'April 2010'
          },
          description: 'Product expert and first line of contact for existing and prospective customers; answered technical support tickets and support forum posts, wrote blog posts and FAQs, and worked with engineering teams to file and prioritize bugs; designed and developed internal support tools integrating our admin interface, production environment, Salesforce CRM ticketing system, and bug tracking systems using HTML, CSS, and JavaScript; onboarded and trained new employees on all tools necessary for efficient awesomeness; served on the incident management on-call team.'
        }
      ]
    };
  };
  _addContactModel = function() {
    return {
      socialMedia: [
        {
          title: 'GitHub',
          link: 'https://github.com/briznad'
        }, {
          title: 'Twitter',
          link: 'https://twitter.com/briznad'
        }
      ]
    };
  };
  return {
    init: init
  };
})();