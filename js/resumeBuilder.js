/*
My resume
 */
// bio
var bio = {
    "name": "Nuno Vieira",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+351 915012837",
        "email": "nunov18@gmail.com",
        "github": "nunov18",
        "twitter": "@nunovieirapt",
        "location": "Porto, Portugal"
    },
    "welcomeMessage": "Hello World, Welcome!",
    "skills": [
        "Communication", "Leadership", "Consulting", "Continuous Improvement"
    ],
    "biopic": "images/EU.jpg"
};

// education
var education = {
    "schools": [{
        "name": "Faculty of Engineering of University of Porto",
        "location": "Street Dr. Roberto Frias, 4200-465 Porto, Portugal",
        "degree": "Masters",
        "majors": ["Services Engineering and Management"],
        "dates": "2015-2017",
        "url": "https://sigarra.up.pt/feup/en/CUR_GERAL.CUR_VIEW?pv_ano_lectivo=2016&pv_origem=CUR&pv_tipo_cur_sigla=M&pv_curso_id=727"
    }, {
        "name": "University Institute of Maia – ISMAI",
        "location": "Avenue Carlos Oliveira Campos, 4475-690 Maia, Portugal",
        "degree": "Bachelor's degree",
        "majors": ["Bussiness Management"],
        "dates": "2012-2015",
        "url": "http://www.ismai.pt/pt/ensino/oferta-formativa/licenciaturas/gestao-de-empresas"
    }],
    "onlineCourses": [{
        "title": "Front-End Developer",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
    }]
};

// work
var work = {
    "jobs": [{
        "employer": "Tranquilidade",
        "title": "Operations Manager",
        "dates": "2016",
        "url": "https://www.tranquilidade.pt/pt",
        "location": "Tranquilidade, Porto ,Portugal",
        "description": "Support the reviewing process of the production of the customer database, ensuring ongoing adherence to the quality and service level and coordinating clearance initiatives and enrichment of strategic customer database.\n Correction of commissions assigned to Commercial Directions and major clients.\n Treatment and response to requests for clarification from Official Entities and Government Entities.\n Responsible for the exchange of mediation between the company and the respective mediators,contributing to the exchange of approximately 4,000 processes over a period of three monthswhich corresponds to an increase in productivity by about 60%."
    }]
};
// projects
var projects = {
    "projects": [{
        "title": "Organizing Committee of \"IX Congresso de Engenharia de Serviços e Gestão\"",
        "dates": "2016",
        "url": "https://paginas.fe.up.pt/~cesg/",
        "description": "Faculty of Engineering of University of Porto,Porto(Portugal)\n The IX Congress had as its principal topic Entrepreneurship in Services.",
        "images": [
            "images/cesg.jpg", "images/FEUP.png"
        ]
    }]
};

bio.display = function() {
    // My Name and My Role
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    // bio image
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedImage);
    // Welcome Message
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

    //Top contatcs
    $("#topContacts").prepend(formattedLocation, formattedTwitter, formattedGitHub, formattedEmail);

    //Footer contatcs
    $("#footerContacts").prepend(formattedLocation, formattedTwitter, formattedGitHub, formattedEmail);

    // bio skills
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

// work experience section
work.display = function() {
    for (i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace("%url%", work.jobs[i].url);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);

    }
};

// projects section
projects.display = function() {
    for (i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("%url%", projects.projects[i].url);;
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescriptions = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescriptions);
        for (x = 0; x < projects.projects[i].images.length; x++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[x]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

// education section
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("%url%", education.schools[i].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedDates, formattedLocation, formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("%url%", education.onlineCourses[i].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;
        $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].school).replace("%url%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedOnlineDates, formattedOnlineUrl);
    }
};

bio.display();
work.display();
projects.display();
education.display();

// google map
$("#mapDiv").append(googleMap);
