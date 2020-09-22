export default {
    modules: [
        'bootstrap-vue/nuxt',
        'nuxt-i18n'
    ],
    generate: {
        dir: 'docs',
    },
    components: true,
    buildModules: ['@nuxt/typescript-build'],
    target: 'static',
    mode: "spa",
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
    }
}