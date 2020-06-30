module.exports = {
  siteTitle: "Hi! I'm Espen!",
  siteDescription: `Curriculum vitae`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Espen Schei',
  githubUsername: 'EspenSchei',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Espen is an experienced and passionate fullstack developer. He has over 9 years of experience as a software engineer, solving complex problems using innovative technology and best practices. </br></br>
  Espen likes leveraging managed cloud services to speed up development, and is often consulted about Cloud, DevOps, CI/CD, infrastructure and automation. </br></br>
  His primary focus has always been development, but he also enjoy and master other roles, such as <i>tech lead</i>, <i>solution architect</i> or <i>scrum master</i>. </br></br>
  In general he likes working in agile autonomous DevOps-teams, building structured, robust, reusable and tested solutions together with enthusiastic teammates.`,
  certifications: [
    {
      name: 'AWS Certified Solution Architect - Associate',
      url:
        'https://www.youracclaim.com/badges/f5a034e1-a373-422e-9712-083ece0d1eca',
    },
    {
      name: 'AWS Certified Developer - Associate',
      url:
        'https://www.youracclaim.com/badges/0d083c09-c35b-4287-bf32-dc4c158c0a93',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      url:
        'https://www.youracclaim.com/badges/42675cf1-84d8-4e33-8b27-44bc6fabd389',
    },
    {
      name: 'OCA, Java SE 7 Programmer',
      url:
        'https://www.dropbox.com/s/hv0ls62mg52gcu1/Oracle%20Certified%20Associate%2C%20Java%20SE%207%20Programmer%20-%20Exam%20certificate.pdf?dl=0',
    },
  ],
  skills: [
    {
      name: 'Backend development',
      level: 90,
    },
    {
      name: 'Frontend development',
      level: 85,
    },
    {
      name: 'DevOps and CI/CD',
      level: 85,
    },
    {
      name: 'Databases',
      level: 80,
    },
    {
      name: 'Cloud Services',
      level: 80,
    },
    /* more skills here */
  ],
  /* Highlight buzzwords with star (*) */
  buzzwords: [
    'Java',
    '*Kotlin',
    'JavaScript',
    '*TypeScript',
    'Scala',
    '*Spring Boot',
    'Python',
    '*Node.js',
    'Angular',
    '*React',
    'ELK',
    'Grafana',
    '*Amazon Web Services',
    '*Serverless',
    'MongoDB',
    'Terraform',
    '*GraphQL',
    'REST',
    'OAuth 2.0',
    'GitLab',
    'Docker',
    'Kubernetes',
    '*Apache Kafka',
    'microservices',
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'JProfessionals',
      begin: {
        month: 'may',
        year: '2020',
      },
      duration: null,
      occupation: 'Senior Consultant',
      description:
        'Currently implementing an online Quiz-engine in Kotlin and React, building a microservice architecture with Apache Kafka and Kubernetes on AWS.',
      roles: ['Fullstack developer', 'Solution architect'],
      stack:
        'Kotlin, React, TypeScript, Spring Boot, Apache Kafka, Kubernetes, Amazon Web Services (AWS), GraphQL, GitLab (CI), Terraform, MongoDB, Serverless, DevOps.',
    },
    {
      company: 'Politiets IKT-tjenester',
      begin: {
        month: 'dec',
        year: '2018',
      },
      duration: '1 yr 5 mos',
      occupation: 'Senior Advisor',
      description:
        'Developed and maintained border security solutions for the Norwegian Police ICT Services. Fullstack solution integrating with peripheral equiment like camera, fingerprint sensors and document scanners.',
      roles: ['Fullstack developer', 'Frontend lead'],
      stack:
        'Java, TypeScript, Angular, Redux, Spring, WebSockets, ElasticSearch, Apache Solr, ELK, Jenkins Pipelines, Flyway, Liberty, Postman, DevOps.',
    },
    {
      company: 'Cicero Consulting',
      begin: {
        month: 'aug',
        year: '2016',
      },
      duration: '2 yrs 4 mos',
      occupation: 'Senior Developer',
      description: `Cicero is a product company that delivers IT solutions for financial advisory. They are focusing on implementing and improving key functionality used by the biggest banks in Norway. <br /><br /> As part of a multinational DevOps-team, I lead their efforts on the core product: a SaaS-platform for complex financial calculations, as well as the data warehouse and third party integrations that we used to deliver accurate results.`,
      roles: ['Fullstack developer', 'Scrum Master', 'Technical Architect'],
      stack:
        'Java, Scala, JavaScript, Python, React, Angular, Apache Kafka, Spring Boot, Ansible, Docker, ELK, PostgreSQL, Flyway, Linux, nginx, Grafana, GraphQL, Jenkins Pipelines, DevOps.',
    },
    {
      company: 'Accenture',
      begin: {
        month: 'nov',
        year: '2015',
      },
      duration: '3 yrs 3 mos',
      occupation: 'Software Engineering Analyst',
      description:
        'Worked as a consultant for clients like NAV and Statnett, in different development and architecture roles.',
      roles: ['Fullstack developer', 'Tech Lead', 'Systems Architect'],
      stack:
        'Java, Spring, Spring Batch, JUnit, Hibernate, JavaScript, HTML/CSS, Jenkins, Docker, Bamboo, DDD, SOA, REST, SOAP, SoapUI, systems architecture, security, best practices, design patterns, solution description.',
    },
    {
      company: 'Egmont Kids Media',
      begin: {
        month: 'jan',
        year: '2013',
      },
      duration: '5 mos',
      occupation: 'Bachelor thesis',
      description:
        'We built an innovative and responsive communication channel for kids, focusing on gamification.',
      roles: ['Fullstack developer'],
      stack:
        'C#, .NET, JavaScript, jQuery, HMTL, CSS, SQL, IIS, responsive design',
    },
    {
      company: 'Accenture',
      begin: {
        month: 'jan',
        year: '2011',
      },
      duration: '2 yrs',
      occupation: 'Programmer',
      description:
        'Worked as a consultant for clients like NAV and Altinn, in different development and architecture roles.',
      roles: ['Fullstack developer'],
      stack:
        'Java, JavaScript, C#, .NET, SQL Server, Bash scripting, Amazon Web services, Microsoft Azure, Jenkins, jQuery, security, DevOps, CI/CD.',
    },
    {
      company: 'Egmont',
      begin: {
        month: 'nov',
        year: '2009',
      },
      duration: '1 yr 2 mos',
      occupation: 'Technology journalist',
      description:
        "Freelance tech journalist for Norway's biggest computer magazine. The articles was published on some of Norways biggest online news sites.",
      roles: ['Fullstack developer'],
      stack:
        'Technical writing, product photo, hardware, laptops, gadgets, benchmarking, review.',
    },
  ],
  portfolio: [
    {
      image: '/images/requirement-store.png',
      description: 'Requirement Store',
      url: 'https://github.com/EspenSchei/requirement-store/',
    },
    {
      image: '/images/playlister.png',
      description: 'Playlister',
      url: 'https://github.com/EspenSchei/playlister/',
    },
    /* more portfolio items here */
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/EspenSchei',
    github: 'https://github.com/EspenSchei',
    email: 'espen.schei@outlook.com',
  },
  siteUrl: 'https://espen.schei.dev',
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-171103478-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    },
  ],
}
