this["bmdotcom"] = this["bmdotcom"] || {};
this["bmdotcom"]["templates"] = this["bmdotcom"]["templates"] || {};
this["bmdotcom"]["templates"]["contactView"] = function (obj) {
    var __t, __p = '',
        __j = Array.prototype.join,
        print = function () {
            __p += __j.call(arguments, '');
        };
    with(obj || {}) {
        __p += '<section class="social-media-container">\n  <h2 class="section-header">Also find me on…</h2>\n  <ul class="social-media-list">\n    ';
        _.each(currentPage.socialMedia, function (value) {
            __p += '\n      <li class="social-media-list-item">\n        <a href="' + ((__t = (value.link)) == null ? '' : __t) + '" class="social-media-link" target="_blank">' + ((__t = (value.title)) == null ? '' : __t) + '</a>\n      </li>\n    ';
        });
        __p += '\n  </ul>\n</section>\n\n<section class="form-container">\n  <form action="/contact" method="post">\n    <input name="typeOfContact" type="hidden" value="Contact Form Message" />\n\n    <label for="contactName">\n      <input id="contactName" name="name" type="text" required autofocus />\n      <span class="label-text">Name</span>\n    </label>\n\n    <label for="contactEmail">\n      <input id="contactEmail" name="_replyto" type="email" required />\n      <span class="label-text">Email</span>\n    </label>\n\n    <label for="contactSubject">\n      <input id="contactSubject" name="subject" type="text" />\n      <span class="label-text">Subject</span>\n    </label>\n\n    <label for="contactMessage">\n      <textarea id="contactMessage" name="message" rows="5" required></textarea>\n      <span class="label-text">Message</span>\n    </label>\n\n    <input type="submit" value="Send" />\n  </form>\n</section>';
    }
    return __p;
};
this["bmdotcom"]["templates"]["modalView"] = function (obj) {
    var __t, __p = '',
        __j = Array.prototype.join,
        print = function () {
            __p += __j.call(arguments, '');
        };
    with(obj || {}) {
        __p += '<div class="modal-overlay ' + ((__t = (additionalClasses)) == null ? '' : __t) + '" id="' + ((__t = (modalID)) == null ? '' : __t) + '">\n  <section class="modal-container">\n    <div class="modal-content">' + ((__t = (modalContent)) == null ? '' : __t) + '</div>\n\n    ';
        if (showCloseBtn) {
            __p += '\n      <a class="modal-close" href="javascript:void(0)"><span class="visually-hidden">close modal</span></a>\n    ';
        }
        __p += '\n  </section>\n</div>';
    }
    return __p;
};
this["bmdotcom"]["templates"]["projectsView"] = function (obj) {
    var __t, __p = '',
        __j = Array.prototype.join,
        print = function () {
            __p += __j.call(arguments, '');
        };
    with(obj || {}) {
        __p += '<ul class="projects-list">\n  ';
        _.each(currentPage, function (project) {
            __p += '\n    <li class="projects-list-item">\n      <article class="project-wrapper">\n        ';
            if (project.link) {
                print('<a href="' + project.link + '" class="project-link" target="_blank">');
            }
            __p += '\n\n        <h3 class="project-title">' + ((__t = (project.title)) == null ? '' : __t) + '</h3>\n\n        <figure class="project-media">\n          <img src="/assets/images/projects/' + ((__t = (project.media)) == null ? '' : __t) + '" alt="' + ((__t = (project.title)) == null ? '' : __t) + '" />\n        </figure>\n\n        ';
            if (project.link) {
                print('</a>');
            }
            __p += '\n\n        <p class="project-description">' + ((__t = (project.description)) == null ? '' : __t) + '</p>\n\n        <dl class="project-keywords">\n          <dt>Keywords:</dt>\n\n          ';
            _.each(project.keywords, function (keyword) {
                __p += '\n            <dd>' + ((__t = (keyword)) == null ? '' : __t) + '</dd>\n          ';
            });
            __p += '\n        </dl>\n      </article>\n    </li>\n  ';
        });
        __p += '\n</ul>';
    }
    return __p;
};
this["bmdotcom"]["templates"]["resumeView"] = function (obj) {
    var __t, __p = '',
        __j = Array.prototype.join,
        print = function () {
            __p += __j.call(arguments, '');
        };
    with(obj || {}) {
        __p += '<article class="resume-container" itemscope itemtype="https://schema.org/Person">\n  <div class="meta-content-container">\n    <section class="print-download-buttons">\n      <a href="javascript:window.print()" class="print-button">print</a>\n\n      <a href="/assets/pdf/Brad_Mallow_resume.pdf" class="download-button" target="_blank" download>download</a>\n    </section>\n\n    <section class="personal">\n      <dl class="resume-personal-list">\n        <dt>name</dt>\n        <dd itemprop="name">' + ((__t = (currentPage.personal.name)) == null ? '' : __t) + '</dd>\n\n        <dt>phone number</dt>\n        <dd><a itemprop="telephone" href="tel://' + ((__t = (currentPage.personal.phone.countryCode)) == null ? '' : __t) + '-' + ((__t = (currentPage.personal.phone.areaCode)) == null ? '' : __t) + '-' + ((__t = (currentPage.personal.phone.number)) == null ? '' : __t) + '">+' + ((__t = (currentPage.personal.phone.countryCode)) == null ? '' : __t) + ' (' + ((__t = (currentPage.personal.phone.areaCode)) == null ? '' : __t) + ') ' + ((__t = (currentPage.personal.phone.number)) == null ? '' : __t) + '</a></dd>\n\n        <dt>email address</dt>\n        <dd><a itemprop="email" href="mailto://' + ((__t = (currentPage.personal.email)) == null ? '' : __t) + '">' + ((__t = (currentPage.personal.email)) == null ? '' : __t) + '</a></dd>\n\n        <dt>website</dt>\n        <dd><a itemprop="url" href="' + ((__t = (currentPage.personal.website)) == null ? '' : __t) + '">' + ((__t = (currentPage.personal.website)) == null ? '' : __t) + '</a></dd>\n      </dl>\n    </section>\n\n    <section class="skills">\n      <h2 class="resume-section-header">Skills</h2>\n\n      <ul class="skills-list">\n        ';
        _.each(currentPage.skills, function (skill) {
            __p += '\n          <li class="skill-list-item">' + ((__t = (skill)) == null ? '' : __t) + '</li>\n        ';
        });
        __p += '\n      </ul>\n    </section>\n\n    <section class="education screen-only">\n      <h2 class="resume-section-header">Education</h2>\n\n      <ul class="education-list">\n        ';
        _.each(currentPage.education, function (education) {
            __p += '\n          <li itemprop="alumniOf" itemscope itemtype="https://schema.org/CollegeOrUniversity" class="education-list-item">\n            <h3 itemprop="name">' + ((__t = (education.school)) == null ? '' : __t) + '</h3>\n\n            <span class="education-degree-year">\n              <span>' + ((__t = (education.degree.type)) == null ? '' : __t) + ', ' + ((__t = (education.degree.subject)) == null ? '' : __t) + '</span>\n\n              ';
            if (education.graduationYear) {
                __p += '\n                <span>' + ((__t = (education.graduationYear)) == null ? '' : __t) + '</span>\n              ';
            }
            __p += '\n            </span>\n          </li>\n        ';
        });
        __p += '\n      </ul>\n    </section>\n  </div>\n\n  <div class="primary-content-container">\n    <section class="summary">\n      <h2 class="resume-section-header">Summary</h2>\n\n      <p>' + ((__t = (currentPage.summary)) == null ? '' : __t) + '</p>\n    </section>\n\n    <section class="experiences screen-only">\n      <h2 class="resume-section-header">Professional Experience</h2>\n\n      ';
        _.each(currentPage.experience, function (job, index, list) {
            __p += '\n        ';
            if (index <= 1) {
                __p += '\n          <div class="experience">\n            <h3 itemscope itemprop="worksFor" itemtype="https://schema.org/Organization">' + ((__t = (job.title)) == null ? '' : __t) + ', <span itemprop="name">' + ((__t = (job.organization)) == null ? '' : __t) + '</span></h3>\n\n            <span class="job-location-period">\n              ';
                print((job.location ? job.location + ' &#8212; ' : '') + job.period.start + ' to ' + (job.period.end ? job.period.end : 'present'));
                __p += '\n            </span>\n\n            ';
                if (job.description) {
                    __p += '\n              <p class="job-description">' + ((__t = (job.description)) == null ? '' : __t) + '</p>\n            ';
                }
                __p += '\n\n            ';
                if (job.achievements && job.achievements.length) {
                    __p += '\n              <h4 class="job-achievements-title">Achievements</h4>\n\n              <ul class="job-achievements-list">\n                ';
                    _.each(job.achievements, function (achievement) {
                        __p += '\n                  <li class="job-achievements-list-item">' + ((__t = (achievement)) == null ? '' : __t) + '</li>\n                ';
                    });
                    __p += '\n              </ul>\n            ';
                }
                __p += '\n          </div>\n        ';
            }
            __p += '\n      ';
        });
        __p += '\n    </section>\n  </div>\n\n  <div class="secondary-content-container">\n    <h2 class="resume-section-header print-only">Professional Experience</h2>\n\n    ';
        _.each(currentPage.experience, function (job, index, list) {
            __p += '\n      <section class="experience';
            if (index <= 1) {
                __p += ' print-only';
            }
            __p += '">\n        <h3 itemscope itemprop="worksFor" itemtype="https://schema.org/Organization">' + ((__t = (job.title)) == null ? '' : __t) + ', <span itemprop="name">' + ((__t = (job.organization)) == null ? '' : __t) + '</span></h3>\n\n        <span class="job-location-period">\n          ';
            print((job.location ? job.location + ' &#8212; ' : '') + job.period.start + ' to ' + (job.period.end ? job.period.end : 'present'));
            __p += '\n        </span>\n\n        ';
            if (job.description) {
                __p += '\n          <p class="job-description">' + ((__t = (job.description)) == null ? '' : __t) + '</p>\n        ';
            }
            __p += '\n\n        ';
            if (job.achievements && job.achievements.length) {
                __p += '\n          <h4 class="job-achievements-title">Achievements</h4>\n\n          <ul class="job-achievements-list">\n            ';
                _.each(job.achievements, function (achievement) {
                    __p += '\n              <li class="job-achievements-list-item">' + ((__t = (achievement)) == null ? '' : __t) + '</li>\n            ';
                });
                __p += '\n          </ul>\n        ';
            }
            __p += '\n      </section>\n    ';
        });
        __p += '\n  </div>\n\n  <section class="education print-only">\n    <h2 class="resume-section-header">Education</h2>\n\n    <ul class="education-list">\n      ';
        _.each(currentPage.education, function (education) {
            __p += '\n        <li itemprop="alumniOf" itemscope itemtype="https://schema.org/CollegeOrUniversity" class="education-list-item">\n          <h3 itemprop="name">' + ((__t = (education.school)) == null ? '' : __t) + '</h3>\n\n          <span class="education-degree-year">\n            <span>' + ((__t = (education.degree.type)) == null ? '' : __t) + ', ' + ((__t = (education.degree.subject)) == null ? '' : __t) + '</span>\n\n            ';
            if (education.graduationYear) {
                __p += '\n              <span>' + ((__t = (education.graduationYear)) == null ? '' : __t) + '</span>\n            ';
            }
            __p += '\n          </span>\n        </li>\n      ';
        });
        __p += '\n    </ul>\n  </section>\n</article>\n';
    }
    return __p;
};
this["bmdotcom"]["templates"]["rootView"] = function (obj) {
    var __t, __p = '',
        __j = Array.prototype.join,
        print = function () {
            __p += __j.call(arguments, '');
        };
    with(obj || {}) {
        __p += '<article class="welcome-text">\n  <p>I\'m a <strong>Software Developer</strong> who is passionate about seamless UX, with experience spanning industries and product categories.</p>\n  <p><strong>Get in touch</strong> if you\'d like to build something together.</p>\n  <aside class="pointing-arrow" aria-hidden="true"></aside>\n</article>';
    }
    return __p;
};