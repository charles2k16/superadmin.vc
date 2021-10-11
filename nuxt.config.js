import {
  faBuilding,
  faChartBar,
  faUsers,
  faSignOutAlt,
  faComments,
  faUsersCog
} from '@fortawesome/free-solid-svg-icons';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'super-admin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'quill/dist/quill.core.css',
    // for snow theme
    'quill/dist/quill.snow.css',
    // for bubble theme
    'quill/dist/quill.bubble.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/nuxt-quill-plugin', ssr: false }],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/moment'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    '@chakra-ui/nuxt',
    // https://go.nuxtjs.dev/emotion
    '@nuxtjs/emotion',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/apollo',
    'nuxt-highcharts'
  ],

  chakra: {
    icons: {
      // Here we state that we use `fa`
      // icons library for Chakra's
      // internal icon parser
      iconPack: 'fa',
      iconSet: {
        faBuilding,
        faChartBar,
        faUsers,
        faSignOutAlt,
        faComments,
        faUsersCog
      }
    },
    config: {
      autoImport: true
    }
  },

  server: {
    port: 4000 // default: 3000
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    baseURL:
      process.env.VUE_APP_SERVER_URL ||
      'https://vibrantcreator-backend-dev.herokuapp.com/v1/api'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'admin/login', method: 'post', propertyName: 'token' },
          user: { url: 'admin/me', method: 'get', propertyName: 'result' },
          logout: false
        },
        autoLogout: true
      }
    }
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.VUE_APP_GRAPHQL_HTTP ||
          'https://vibrantcreator-data-core-dev.herokuapp.com/v1/graphql',
        query: {
          fetchPolicy: 'no-cache'
        }
      }
    }
  }
};
