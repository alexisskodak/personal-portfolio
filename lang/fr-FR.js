export default {
  common: {
    link: 'suivez ce lien',
    stack: 'cadre technique',
    work: 'mes réalisations',
    contact: 'contactez moi',
    network: 'suivez moi sur les réseaux sociaux',
    emailSuccess: 'Succès. Merci pour votre message.',
    emailError: 'Erreur. Veuillez essayer plus tard'
  },

  nav: {
    home: 'Accueil',
    aboutme: 'A propos de moi',
    projects: 'Projets',
    photography: 'Photographie',
    contact: 'Contact'
  },
  index: {
    title1: 'Un peu sur moi',
    p1: `Je suis consultant en développement d'applications. A part mon travail, j'ai des nombreux projets personnels et j'aime transmettre les compétences et savoir-faire que j’ai acquis jusqu'à présent. Parmi les outils dont je m’en sers régulièrement figurent:`,
    list: {
      title: 'Ce que je fais',
      pt1: `Interfaces modernes et réactives`,
      pt2: `Infrastructure backend`,
      pt3: `Sysadmin Linux`,
      pt4: `Outils et tableaux de bord admin`
    },
    p2: 'Je propose aussi des cours particuliers et accompagnement individuel pour toute personne souhaitant démarrer ou améliorer ses compétences dans le monde du développement web. Tous niveaux et tous profils, que vous soyez un professionnel cherchant à devenir plus autonome dans le numérique, artiste cherchant à donner de la visibilité en ligne à vos créations, autodidacte / personne en formation cherchant à renforcer ses acquis.'
  },

  about: {
    title: 'A propos de moi',
    p1: `Né et grandi au Mexique, j’ai fait des études d’informatique à l'Université de Strasbourg et obtenu un diplôme professionnel de développeur web au sein de l'école WF3 de Lyon, ville dans laquelle je réside à présent. Je travaille actuellement en tant que consultant développeur d’applications.`,
    p2: `Mis à part l'informatique et la technologie, j’adore la photographie, la randonnée et la cuisine. J’ai aussi récemment commencé à apprendre la théorie musicale. En règle générale, je suis quelqu’un qui aime les défis et je suis toujours partant pour faire des nouvelles rencontres.`
  },

  gallery: {
    title: `Galerie de photos`,
    sub: `Ma collection`,
    p1: `Vous trouverez ici quelques unes de mes photographies préférées. J’aime la photographie de paysages (urbains et naturels) ainsi que la photo de rue et les portraits. Je suis fasciné par le jeu d’ombres, lumières et contrastes. J'apprécie les prises de vue créatives mais aussi les guides classiques.`
  },

  work: {
    title: 'Mes réalisations',
    subtitle: 'Académique / professionnel',
    subtitle2: 'Personnel / en cours',
    projects: {
      odd: {
        title: 'Open Data - Tableau de bord',
        category: 'Analyse de données, développement web',
        description: 'Application web de type tableau de bord pour visualiser interactivement des données publiques. Les données présentées concernent la consommation et la production d\'électricité par région et par an en France. L’application consiste d’un serveur qui traite et nettoie les données et les envoie ensuite à l\'appli qui les place dans des graphiques et autres éléments visuels. Application presentée et acceptée par ODRE (Open Data Réseaux Energies France), lien vers le portail ci contre https://opendata.reseaux-energies.fr/explore/dataset/prod-region-annuelle-filiere/information/?disjunctive.region',
        stack: ['python', 'pandas', 'fastApi', 'vue.js', 'chart.js'],
        link: 'https://opendata-visual.web.app/'
      },
      scariff: {
        title: 'Scariff. Agence Immobilière',
        category: 'Développement web',
        description: 'Site et application web pour une agence immobilière basée à Mexico. Parmi les fonctionnalités clés il y a: opérations d’enregistrement, lecture, mise a jour et suppression de propriétés, clients, propriétaires et utilisateurs. Génération automatique de rapports pdf, tableau de bord administrateur avec système de rôles et privilèges, infrastructure scalable, optimisation de moteurs de recherche.',
        stack: ['python', 'postgreSQL', 'django'],
        link: 'https://scariff.com.mx/'
      },
      mj: {
        title: 'Système de recommendation',
        category: 'Algorithmes',
        description: 'Dans le cadre de mon projet de soutenance (un site web de type e-commerce), j’ai implémenté un service de recommandation de produits en utilisant des méthodes statistiques, plus précisément le coefficient de corrélation de Pearson. Cette métrique nous permet de proposer des suggestions qui sont cohérentes avec les préférences de l\'utilisateur.',
        stack: ['PHP', 'Symfony'],
        link: 'https://github.com/sickb0i/Recommendation-Micro-Engine'
      },
      webServer: {
        title: 'Serveur personnel',
        category: 'Développement web, administration systèmes, réseaux',
        description: 'Dans le cadre d’un projet personnel ayant pour but de renforcer mes compétences complémentaires au développement, j’ai décidé d\'héberger mon site personnel (celui que vous naviguez actuellement) ainsi qu’un serveur mail SMTP personnalisé dans une machine virtuelle distante. J’ajouterais possiblement un serveur Git dans le futur.',
        stack: ['nuxt.js', 'bash', 'nginx', 'docker'],
      },
      exposio: {
        title: 'Expos.io',
        category: 'Développement web',
        description: 'Expos.io est une application qui permet à l\'utilisateur de créer des galeries élégantes et soignées de contenu multimédia afin de les présenter sur internet. L’accent est mis sur l’harmonie entre chaque pièce de la galerie, que ce soit de la photographie, de l’illustration, des vidéos etc. Une fonctionnalité remarquable est l\'adaptation automatique par la galerie à la relation d’aspect de chaque pièce prévue par le réalisateur, contrairement à d\'autres plateformes.',
        stack: ['python', 'django', 'vue.js', 'docker', 'postgreSQL']
      }
    }
  },

  contact: {
    title: 'Pour toute demande, merci de remplir le formulaire',
    subtitle: 'Veuillez inclure un corps de message et vos coordonnées si vous souhaitez une réponse rapide',
    labels: {
      fname: 'Nom / prénom',
      number: 'Numéro de téléphone',
      email: 'Adresse mail',
      subject: 'Objet',
      message: 'Message',
      submit: 'Envoyer'
    },
    nameRules: 'Le Nom / Prénom doit avoir max. 25 caractères',
    phoneRules: 'Le numéro de téléphone doit etre inferieur a 15 caractères',
    subjectRules: {
      req: 'L’objet du message est requis',
      count: 'L’objet du message doit etre inferieur a 25 caracteres',
    },
    emailRules: {
      req: 'L’adresse email est requise',
      count: 'L’adresse mail doit être valide',
    },
    bodyRules: {
      req: 'Le corps du message est requis',
      count: 'Le corps du message doit être inférieur à 250 caractères'
    },
  }
}










