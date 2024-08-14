/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Jedlaoui",
  logo_name: "SJ",
  full_name: "Sarah Jedlaoui",
  subTitle:
    //"Full Stack Developer, Machine Learning Practitioner, Open Source Enthusiast, Life Long Learner.",
    "Currently a full stack software engineer at Bridges Engineering. I am committed to continuous development and learning, always exploring new technologies and best practices to deliver innovative and efficient solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1wz8GJFNWTACPQycX2S6b6wOBYMZAJA36/view?usp=sharing",
  mail: "mailto:im.sarajedlaoui99@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/SarahJedlaoui",
  linkedin: "https://www.linkedin.com/in/sarah-jedlaoui/",
  gmail: "Sarajedlaoui99@gmail.com",
  facebook: "https://www.facebook.com/sarah.jedlaoui/",
  twitter: "https://twitter.com/sarah-jedlaoui/",
  instagram: "https://www.instagram.com/sarah_jedlaoui/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive UI and UX for web applications",
        "⚡ Building responsive website front end using ReactJS and back end using Firebase ",
        "⚡ Creating a web site using full stack MERN ",
        "⚡ Creating a mini game using Java",
        "⚡ Integration of third party services such as Firebase/ AWS ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },

        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",

        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Higher Institute of Applied Sciences and Technology of Sousse",
      subtitle: "Bachelors in Computer Science and Engineering",
      logo_path: "issat.jpg",
      alt_name: "SSEC",
      duration: "2018 - 2023",
      descriptions: [
        "⚡ I completed my Engineering degree in Computer Science.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Ftontend, Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://issatso.rnu.tn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AIESEC Certification",
      subtitle: "Leadership Development Experience",
      logo_path: "AIESEC.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1wDhQWKi4JXj_K2B2G40cIAqCsyYzASLu/view?usp=sharing",

      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Microsoft",
      subtitle: "MICODING WebCompetition",
      logo_path: "Microsoftt.png",
      certificate_link:
        "https://drive.google.com/file/d/1OuglV-l6mSJJN7Ja2_ntskxit6QRXJit/view?usp=sharing",

      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },

    {
      title: "Problem Solving Division",
      subtitle: "Competitive Programming Workshops & Webinars",
      logo_path: "psd.PNG",
      certificate_link:
        "https://drive.google.com/file/d/1Voqjw_ruLuHEc_TWVFhWQcAUkaad9tLw/view?usp=sharing",
      alt_name: "Opensource Event",
      color_code: "#fefd7b",
    },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed three internships and i'm currently working for a Startup called Bridges Engineering as a full stack developer. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Wi-Mobi",
          company_url: "http://www.wi-mobi.com/home",
          logo_path: "wimobi.jpg",
          duration: "Aughst 2021",
          location: "Mahdia-Tunisia",
          description:
            "The objective of this project is to deliver a digital solution for schools so that the administrator can manage teachers and students . \n  ERP module:  Authentication , Student management , Teacher management Keyword: React.js, Firebase",

          color: "#0071C5",
        },
        {
          title: "Full stack JS developer ",
          company: "Responsive Web Systems",
          company_url: "https://responsive-web-systems.com/",
          logo_path: "RWS.png",
          duration: "Aug 2022 - Sept 2022",
          location: "Remote",
          description: `The objective of this project is to deliver a digital solution for moving companies to get informations about their customers and give them quotes. `,
          color: "#ee3c26",
        },
        {
          title: "Full stack MERN developer ",
          company: "OG Technologies EU",
          company_url: "https://www.ogtechnologies.co/",
          logo_path: "OG.png",
          duration: "Mars 2023 - Sept 2023",
          location: "Vienna,Austria",
          description: `The objective of this project is to create an interactive and complete platform dedicated to learning Web3 and Blockchain skills : https://edunode.org  `,
          color: "#ee3c26",
        },
        {
          title: "Full stack developer ",
          company: "Bridges Engineering",
          company_url: "https://www.theleap.studio/",
          logo_path: "bridges.jpeg",
          duration: "October 2023 - Present",
          location: "Sousse,Tunsia",
          description: `My mission is to create prototype websites and applications for various project ideas. These prototypes are presented to clients for approval, and upon receiving approval, I proceed to fully develop the projects. `,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "IEEE Computer society vice chair ",
          company: "IEEE",
          company_url: "https://www.ieee.org/",
          logo_path: "IEEE.jpg",
          duration: "Mar 2020 - Nov 2020",
          location: "IssatSo Tunisie",
          description:
            "IEEE Computer Society is a professional society of the Institute of Electrical and Electronics Engineers. Its purpose and scope is to advance the theory, practice, and application of computer and information processing science and technology and the professional standing of its members.",
          color: "#4285F4",
        },
        {
          title: "AISEC Member",
          company: "AIESEC",
          company_url: "https://aiesec.org/",
          logo_path: "AIESEC.jpg",
          duration: "Nov 2020 - Present",
          location: "AIESEC Hadrumet Sousse Tunisia",
          description:
            "i was in 'Incoming Exchange Global Internship Program' department, my role was to contact the companies and try to negociate with them so they can offer us opportunities for the global interns. Then we interview the candidates to see if they are qualified to work in the company. So i take care of their needs and see if they needs anything and if the company is satisfied or not ",
          color: "#a60000",
        },

        {
          title: "4C Ambassador",
          company: "Skills Certification and Career Centers",
          company_url: "https://www.4c.tn/",
          logo_path: "4c.png",
          duration: "Dec 2020 - May 2021",
          location: "Remote",
          description:
            "Spread Awareness of new Technologies and Companies and new Opportunities to Students and Grow Bagcampus Community.",
          color: "#0059c9",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create React/Nextjs projects, NodeJS Backend Projects, Python Scripts. And i'am open to learn new skills. Below are some of my projects. Note : click on the project to redirect you to the link.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sara.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Kanteen",
      url: "https://www.kanteen.info/",
      description:
        " A digital solution to create an interactive and complete platform dedicated to promote restaurants.",
      languages: [
        {
          name: "AWS",
          iconifyClass: "logos-aws",
        },
        {
          name: "Typescript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "Nextjs",
          iconifyClass: "logos-nextjs",
        },
      ],
    },
    {
      id: "0",
      name: "EduNode",
      url: "https://edunode.org",
      description:
        " A digital solution to create an interactive and complete platform dedicated to learning Web3 and Blockchain skills ",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDb",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "0",
      name: "OG Technologies Website",
      url: "https://ogtechnologies.co",
      description:
        " A Website for OG Technologies Start-up to get in touch with their clients and inform them about their products.",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDb",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "0",
      name: "MozartPay",
      url: "https://mozartpay.com",
      description:
        " A digital solution for online business payments . (still in progress)",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDb",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "0",
      name: "School Website",
      url: "https://github.com/SarahJedlaoui/site-d-cole",
      description:
        " A digital solution for school's administrator to manage the teachers and students in their shcool. ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Fire Base",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "1",
      name: "Online Librerie",
      url:
        "https://github.com/SarahJedlaoui/Readify-Frontend/tree/main/Readify-Frontend-master",
      description:
        "A online librerie where u can search or read any book using Google Books API, with a recommandation system and personal interface.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDb",
          iconifyClass: "logos-mongodb",
        },
      ],
    },

    {
      id: "3",
      name: "Moving Website",
      url: "https://github.com/SarahJedlaoui/d-m-nagement",
      description:
        "A digital solution for moving companies to get informations about their customers and give them quotes.      ",

      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },

    {
      id: "4",
      name: "E-commerce Web Site",
      url: "https://github.com/SarahJedlaoui/e-commerce",
      description:
        "the objective of this project is to deliver a digital solution as an e-commerce web site for a client  where he can add items to sell via his admin dashboard.",
      languages: [
        {
          name: "Php",
          iconifyClass: "logos-php",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
      ],
    },

    {
      id: "5",
      name: "Mini Paint",
      url: "https://github.com/SarahJedlaoui/MiniPaint",
      description: "GUI based Mini Paint Application.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },

    {
      id: "6",
      name: "Snake",
      url: "https://github.com/SarahJedlaoui/Snake",
      description:
        "A snake game which covers all the basic features like score, high score and an automated speed increase simultaneously when the snake eats the food.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },

    {
      id: "7",
      name: "Blood Donation Predictor",
      url: "https://blood-donation-predictor-app.herokuapp.com/",
      description:
        "Predicts if one is ready to donate blood based on the user's blood donation history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },

    {
      id: "8",
      name: "Portfolio Website",
      url: "https://github.com/SarahJedlaoui/Portfolio",
      description: "You are stalking it right now 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
