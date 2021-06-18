const {NODE_ENV = "production"} = process.env;
const isDev = NODE_ENV === "development";


export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/personal-portfolio/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - portfolio',
    title: 'Alexis Skodak',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: `Alexis Skodak's personal website and portfolio. Here you'll find some of my projects, some info about me
        as well as a photo gallery with some of my work.`
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // ...
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    'nuxt-compress',
    '@nuxt/content'
  ],

  pwa: {
    meta: {
      theme_color: '#121212'
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/robots',
    ['@nuxtjs/sitemap', {
      hostname: 'https://alexisskodak.xyz',
      gzip: true,
      path: '/sitemap.xml',
      generate: false,
      routes: [
        '/',
        '/about',
        '/gallery',
        '/contact',
        '/work',
      ]
    }],
    [
      'nuxt-i18n',
      {
        defaultLocale: 'en',
        locales: [
          {
            code: 'fr',
            file: 'fr-FR.js'
          },
          {
            code: 'en',
            file: 'en-US.js'
          },
        ],
        lazy: true,
        langDir: "lang/"
      }
    ]
  ],

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-dark.css'
      }
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: '/user',
  },

  webfontloader: {
    google: {
      families: ['Roboto:100,200,300,400,500,700,900']
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    defaultAssets: false, // for production
    optionsPath: 'vuetify.options.js',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,

    postcss:
      {
        // disable postcss plugins in development
        plugins: isDev
          ? {} : {
            "@fullhuman/postcss-purgecss": {
              content: [
                'components/**/*.vue',
                'layouts/**/*.vue',
                'pages/**/*.vue',
                'plugins/**/*.js',
                'node_modules/vuetify/src/**/*.ts',
                'node_modules/themes/prism-themes/themes/prism-material-dark.css'
              ],
              styleExtensions: ['.css'],
              safelist: {
                standard: [
                  "body",
                  "html",
                  "code"
                ],
                deep: [
                  /page-enter/,
                  /page-leave/,
                  /dialog-transition/,
                  /tab-transition/,
                  /tab-reversetransition/
                ]
              },
              whitelistPatternsChildren: [/token$/],
              whitelist: [
                'pre', 'code', 'prism', 'line-numbers', 'tag', 'toolbar-item', 'toolbar',
                'code-toolbar', 'span', 'button', 'line-numbers-rows', 'url-link', 'attr-name', 'attr-value', 'punctuation',
                'keyword', 'keyword-let', 'operator', 'string'
              ],

            },
            "css-byebye": {
              rulesToRemove: [
                /.*\.v-application--is-rtl.*/,
                /.*\.theme--light.*/
              ]
            }
          }
      },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
