/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Alcatraz9",
  title: "Hi all, I'm Rishabh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Angular / Nodejs  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/15q8svChkO6qSLFkww_goWJfXIhoCPcmy/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Alcatraz9",
  linkedin: "https://www.linkedin.com/in/rishabh-r-m07/",
  gmail: "rishabhsun@gmail.com",
  gitlab: "https://gitlab.com/Alcatraz9",
  facebook: "https://www.facebook.com/rishabh.mallik.52",
  instagram: "https://www.instagram.com/_.evil.morty._/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive and realword web applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Heroku"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Institute Of Technology, Rourkela",
      logo: require("./assets/images/NITRLogo.png"),
      subHeader: "B.Tech in Computer Science Engineering",
      duration: "July 2018 - April 2022",
      desc: "",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "DAV Public School, Unit-8, Bhubaneswar",
      logo: require("./assets/images/DAVLogo.png"),
      subHeader: "Stream: Science with optional Computer Science",
      duration: "March 2017 - February 2018",
      desc: "",
      descBullets: ["Scored 93.6% in CBSE Board Exams"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    }
    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "GEP",
      companylogo: require("./assets/images/GEPLogo.png"),
      date: "May 2021 – July 2021",
      desc: "Built a fully functional Chatbot using GEP's Plugin Architecture",
      descBullets: [
        "Tech Stack used: Angular and .NET",
        "Runner Up Team in GEP Techathon 2021"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I BUILT TO START MY JOURNEY AS A DEVELOPER",
  projects: [
    {
      image: require("./assets/images/SIEVELogo.png"),
      projectName: "SIEVE.AI Intelligent Resume Shortlisting Web Application",
      projectDesc: "Scalable resume shortlisting application based on sorting resumes that are relevant to required job role and responsibilities",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Alcatraz9/sieve.ai"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/GETREKTLogo.png"),
      projectName: "Get-Rekt Social Media Web Application",
      projectDesc: "a functional social media web application with all basic functionalities like login/logout/sign-up, homepage, user page, reacting, commenting on posts and notifications.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://get-rekt-d1fc5.web.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/FACHIONELogo.png"),
      projectName: "Fachione E-commerce Website",
      projectDesc: "Built a fully functional dummy E-commerce website with all basic functionalities, including admin role. Built on vanilla PHP with postgreSQL.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fachione.herokuapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Runner Up GEP Techathon 2021",
      subtitle:
        "Runner Up  among 10 teams. Created Sieve.ai - An Intelligent Resume Shortlisting Web Application",
      image: require("./assets/images/GEPLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CoonZwclLxc8CObpqn6CagVOda66vb8b/view?usp=sharing"
        }
      ]
    },
    {
      title: "Tabdeel Studios Project Prompt",
      subtitle:
        "Developed my first website, Fachione, which was recognised among 4000 participants by Tabdeel Studios.",
      image: require("./assets/images/TSLogo.png"),
      footerLink: [
        {
          name: "Certificate Of Proficiency",
          url: "https://drive.google.com/file/d/1duV76Tags7iWz835XoCkBwZkm1INkX2h/view?usp=sharing"
        }
      ]
    },

    {
      title: "Scholarship: National Talent Search Examination",
      subtitle: "Was among the 2000 selected out of 9 Lakh participants across India.",
      image: require("./assets/images/NTSELogo.png"),
      footerLink: [
        {name: "Certification", url: ""}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9114268040",
  email_address: "rishabhsun@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
