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
      personal: {
        name: 'Brad Mallow',
        email: 'brad.mallow@gmail.com',
        phone: {
          countryCode: '1',
          areaCode: '858',
          number: '205-8052'
        },
        website: 'https://bradmallow.com'
      },
      summary: 'I am a founder, product leader, engineering manager, and software developer with extensive experience crafting businesses, applications, and services. I am passionate about exposing complicated information through thoughtful interfaces. I enjoy utilizing my skills to build quality products and foster great teams.',
      education: [
        {
          school: 'University of California, Santa Cruz',
          degree: {
            type: 'B.A.',
            subject: 'Film & Digital Media'
          }
        }
      ],
      skills: ['making something from nothing', 'engineering management', 'development & deployment workflows', 'performance optimization', 'web accessibility', 'rapid prototyping'],
      experience: [
        {
          title: 'Software Development Consultant',
          organization: 'stealth startup',
          location: 'San Francisco, California',
          period: {
            start: 'Feb 2023',
            end: 'July 2023'
          },
          description: 'I defined the product scope and strategy, then built the initial web application using a modern javascript application stack. The product included innovative interactive data visualizations, powered by d3.js, providing developers unprecedented insight into their build processes.',
        },
        {
          title: 'Board Member & Technical Advisor',
          organization: 'Thrilling',
          period: {
            start: 'January 2023',
            end: 'Present'
          }
        },
        {
          title: 'Co-Founder & CTO',
          organization: 'Thrilling',
          location: 'Los Angeles, California',
          period: {
            start: 'August 2018',
            end: 'December 2022'
          },
          description: 'I co-founded Thrilling, a two-sided online marketplace for vintage apparel and home goods. As the technical co-founder, I personally built the foundational website and apps, allowing us to prototype, launch, and scale the business from nothing to over $1 million in ARR.',
          achievements: [
            'Scaled our tech stack to support 1800+ independent secondhand vendors that utilized our tools to upload 300k+ unique items sold on our marketplace visited by millions of people.',
            'Used a variety of tools, such as TypeScript, JavaScript, Python, React, Angular, Svelte, Ionic, node.js, GraphQL, Firestore, BigQuery, Firebase Functions, GCP Cloud Run, GCP Pub/Sub, Shopify Liquid, and many more to keep it all humming.',
            'Built out a team of 35+ outstanding employees with inclusive and diverse backgrounds, including a 12-person product & tech team that I directly managed.',
            '$10 million dollars raised in pre-seed, seed, and series A funding by investors including Prelude Ventures, Elemental Excelerator, Defy, Urban US, Phoenix Rising, Closed Loop, and Congruent Ventures.',
            'Crafted strategy and rolled out impactful machine learning-powered solutions for image manipulation, tagging, pricing algorithms, and AI copywriting, which reduced costs and increased revenue.',
          ]
        },
        {
          title: 'Senior Manager Engineering',
          organization: 'Poppin',
          location: 'New York, New York',
          period: {
            start: 'August 2015',
            end: 'August 2016'
          },
          description: 'I started as the head of frontend development then transitioned to managing the entire tech team, consisting of on-site and offshore frontend, backend, full stack, and QA team members; handled all technical needs of a rapidly growing startup selling physical goods to both B2B & B2C customers. This included ecom, ERP, sales management, and middleware systems to make it all work.',
          achievements: [
            'Led the team to successfully replatform from an aging system that was inhibiting growth to a modern, full-featured ecom solution.',
            'Identified the need to transition from static markup to fully accessible templates that could be administered by our internal clients, freeing up their creativity and my developer\'s time.  I secured stakeholder buy-in (design & marketing) and led the tech team to implement and execute.'
          ]
        },
        {
          title: 'Senior Interface Developer',
          organization: 'Thrillist Media Group',
          location: 'New York, New York',
          period: {
            start: 'July 2013',
            end: 'May 2015'
          },
          description: 'I developed modules and features in close collaboration with design and product teams, used across multiple editorial and ecommerce sites built upon Thrillist’s proprietary web application platform. As a senior member of the team I advocated a high standard of code quality and maintainability through active involvement in code reviews, and was also tasked with deploying code to production systems.',
          achievements: [
            'Led a special projects team of developers tasked with originating ideas around strategic company objectives and developing them into production-ready solutions.',
            'Designed, prototyped, and implemented internal curation tools, providing editorial and merchandising teams granular control over content placement through an intuitive interface.',
            'Built the corporate identity site (http://thrillistmediagroup.com) making use of CSS animation and transitions.',
          ]
        },
        {
          title: 'Frontend Development Consultant',
          organization: 'Intuit',
          location: 'Menlo Park, California',
          period: {
            start: 'February 2012',
            end: 'March 2013'
          },
          description: 'I performed an overhaul on Intuit.com – an Alexa US Top 100 website - as well as Intuit\'s 50 other most-frequented pages, concentrating on performance, accessibility, frontend best practices, and optimizing for use on mobile devices.',
          achievements: [
            'Achieved a 50% reduction in page load times by refactoring HTML, CSS, and JavaScript, driving a marked jump in conversions in key growth areas. ',
            'Introduced an adaptive, mobile-optimized experience for key new pages and helped align the production life cycle around mobile. ',
            'Led tech talks for the marketing and development groups, evangelizing the cause of performance and frontend best practices. ',
            'Audited and refactored Intuit’s top 50 pages to ensure compliance with accessibility best practices, providing a superb experience for users on all devices.',
          ]
        },
        {
          title: 'Web Developer',
          organization: 'Freelance',
          location: 'San Francisco, California',
          period: {
            start: 'October 2011',
            end: 'February 2012'
          }
        },
        {
          title: 'Support Engineer',
          organization: 'Atlassian',
          location: 'San Francisco, California',
          period: {
            start: 'August 2010',
            end: 'September 2011'
          }
        },
        {
          title: 'Community Advocate',
          organization: 'Ning',
          location: 'Palo Alto, California',
          period: {
            start: 'February 2008',
            end: 'April 2010'
          }
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
