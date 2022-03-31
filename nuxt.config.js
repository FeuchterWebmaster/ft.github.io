export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Feuchte Tube - dein Sender für kostenlose Pornos',
        htmlAttrs: {
            lang: 'de'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Dein kostenloser feuchter Porno-Sender. Feuchte Girls rund um die Uhr. Schalte gratis ein und finde dein tabuloses feuchtes Mädchen. Amateur Porno aus Deutschland.' },
            { name: 'format-detection', content: 'telephone=no' },
            { hid: 'keywords', name: 'keywords', content: 'tube, youporn, pornhub, cliphunter, red tube, xxx, porn, xvideos' },
            { hid: 'rating', name: 'RATING', content: 'RTA-5042-1996-1400-1577-RTA' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
        baseURL: (process.env.NODE_ENV === 'production' ? 'https://feuchtetube.net' : 'http://localhost:3000')
    },

    // @nuxtjs/sitemap configuration
    sitemap: {
        gzip: true,
        hostname: 'https://feuchtetube.net',
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