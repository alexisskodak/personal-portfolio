export default {
  common: {
    link: 'see it here',
    stack: 'tech stack',
    work: 'my work',
    contact: 'contact me',
    network: 'Follow me on social media',
    emailSuccess: 'Success. Thanks for submitting your message.',
    emailError: 'Error. Try again later.'
  },

  nav: {
    home: 'Home',
    aboutme: 'About me',
    projects: 'Projects',
    photography: 'Photography',
    contact: 'Contact'
  },
  index: {
    title1: 'A bit about me',
    p1: `I am a software consultant who enjoys side projects as well as teaching some of what I've learnt so far. Tools I like to work with as of early 2021 include:`,
    list: {
      title: 'What I do',
      pt1: `Reactive frontend development`,
      pt2: `DB & Backend architecture`,
      pt3: `Linux sysadmin and server setup`,
      pt4: `Admin tools and dashboards`
    },
    p2: 'I also provide one-on-one private lessons for aspiring developers from any background, may it be professionals seeking to become more independent on the internet, artists who want to give online presence to their creations, or anyone who\'s looking to further dive into the universe of computer programming.'
  },

  about: {
    title: 'About me',
    p1: `Born and raised in Mexico, I majored in Computer Science at Strasbourg University and obtained a professional web development degree at WF3 school in Lyon, France. I am currently working as a consultant developer.`,
    p2: ` Aside from CS and technology, I love photography, hiking and cooking. I've also recently started music theory as a hobby, I like to constantly challenge myself and meet new people.`
  },

  gallery: {
    title: `Gallery`,
    sub: `My collection`,
    p1: `Here you'll find some of my favorite pictures. I like shooting landscape (natural & urban) as well as street photography, playing with lights and shadows, and occasionally portraits. I very much enjoy both creative layouts as well as following classic composition guides.`
  },

  work: {
    title: 'My work',
    subtitle: 'Academic / professional',
    subtitle2: 'Personal / ongoing',
    projects: {
      odd: {
        title: 'Open Data Dashboard',
        category: 'Data analysis, web development',
        description: 'A web app made to interactively visualize publicly available (open) data. This example dashboard focuses on regional electricity production and consumption in France. The application consists of a backend service that processes, cleans and serves the data and the client which maps it into charts and other DOM elements.',
        stack: ['python', 'pandas', 'fastApi', 'vue.js', 'chart.js'],
        link: 'https://opendata-visual.web.app/'
      },
      scariff: {
        title: 'Scariff Real Estate',
        category: 'Web development',
        description: 'Website made for a Real Estate SME based in Mexico City. Core functionalities include: Full CRUD for listings, clients, owners and admin users. Client-side PDF generation for properties. Admin panel with Authentication and Role tiers. Scalable infrastructure. SEO.',
        stack: ['python', 'postgreSQL', 'django'],
        link: 'https://scariff.com.mx/'
      },
      mj: {
        title: 'Recommendation service',
        category: 'Algorithms',
        description: 'As a part of a school project (Ecommerce web app) I programmed a service aimed to give the user \'personal\' recommendations based on his and other users\' product ratings. Using Pearson Correlation Coefficient as a similarity metric we\'re able to show the user a list of products that are statistically likely to be relevant, at least more likely than showing a list of random products.',
        stack: ['PHP', 'Symfony'],
        link: 'https://github.com/sickb0i/Recommendation-Micro-Engine'
      },
      webServer: {
        title: 'Self hosted web server',
        category: 'Web development, sysadmin, networks',
        description: 'As a side project aimed towards developing my knowledge on skills complimentary to software development, and quite honestly just for fun, I decided to self host my personal website (the one you\'re browsing right now), as well as a personal SMTP email server and various other stuff on a VPS. Might add a git server down the line ',
        stack: ['nuxt.js', 'bash', 'nginx', 'docker']
      },
      exposio: {
        title: 'Expos.io',
        category: 'Web development',
        description: 'Exposio is an app that lets you create custom galleries for you to present your creations to the world. Focusing on the layout and the harmony between each piece of content, may it be photography, illustration, video and so on. A noteworthy feature is that the layout adapts to your contents\' intended aspect ratio and not the other way around.',
        stack: ['python', 'django', 'vue.js', 'docker', 'postgreSQL']
      }
    }
  },

  contact: {
    title: 'For inquires please fill the form',
    subtitle: 'Include a message body and your contact data if you expect a fast reply',
    labels: {
      fname: 'Full name',
      number: 'Phone number',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      submit: 'submit'
    },
    nameRules: 'Name must be less than 25 characters',
    phoneRules: 'Phone number must be less than 15 characters',
    subjectRules: {
      req: 'Subject is required',
      count: 'Subject must be less than 25 characters',
    },
    emailRules: {
      req: 'E-mail is required',
      count: 'E-mail must be valid',
    },
    bodyRules: {
      req: 'A body for the message is required',
      count: 'Message must be less than 250 characters'
    },
  }
}
