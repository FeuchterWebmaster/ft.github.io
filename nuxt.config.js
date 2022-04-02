import config from './assets/config'
export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: config.meta.title,
        htmlAttrs: {
            lang: config.meta.htmlLang
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: config.meta.description },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'keywords', name: 'keywords', content: config.meta.keywords },
            { hid: 'rating', name: 'RATING', content: 'RTA-5042-1996-1400-1577-RTA' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.gif' },
            { rel: 'stylesheet', href: '/css/bootstrap.min.css' }
        ],
        script: [{
            type: 'text/javascript',
            src: '/js/bootstrap.bundle.min.js'
        }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // '~/assets/css/bootstrap.min.css',
        // '~/assets/css/style.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // { src: '~/plugins/bootstrap.bundle.min.js', mode: 'client' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/sitemap'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        parallel: true,
        cache: true,
        hardSource: true,
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: false,
                minifyJS: false,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true
            }
        }
    },

    env: {
        baseURL: (process.env.NODE_ENV === 'production' ? config.baseURL : 'http://localhost:3000')
    },

    // @nuxtjs/sitemap configuration
    sitemap: {
        gzip: true,
        hostname: config.baseURL,
        routes: [],
        trailingSlash: true,
        exclude: [
            '/seite/**',
            '/porno/**',
            '/tag/seite/**'

        ]
    },

    router: {
        trailingSlash: true,
    },

    generate: {
        dir: 'docs/',
        fallback: '404.html'
    }
}