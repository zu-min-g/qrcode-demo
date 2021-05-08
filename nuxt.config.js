export default {
    modules: [
        'bootstrap-vue/nuxt',
        'nuxt-i18n'
    ],
    generate: {
        dir: 'docs',
    },
    router: {
        base: '/qrcode-demo/',
    },
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
    },
    components: true,
    buildModules: ['@nuxt/typescript-build'],
    target: 'static',
    ssr: false,
    modern: 'client',
    i18n: {
        locales: [
            {
                code: 'ja',
                iso: 'ja-JP',
                name: '日本語',
                file: 'ja-JP.js'
            },
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en-US.js'
            }
        ],
        defaultLocale: 'en',
        strategy: 'prefix_and_default',
        detectBrowserLanguage: {
            useCookie: true
        },
        lazy: true,
        langDir: 'lang/',
    },

    server: {
        host: '0.0.0.0',
    },

    build: {
        babel: {
            plugins: [
                ['@babel/plugin-proposal-private-methods', { loose: true }]
            ],
        },
    },
}