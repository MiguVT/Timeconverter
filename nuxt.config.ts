// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: false,

  modules: ['@vueuse/nuxt', '@nuxtjs/color-mode'],

  colorMode: {
    classSuffix: '',
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Timezone Converter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Beautiful, fast, and ad-free timezone converter' },
        { name: 'theme-color', content: '#3b82f6' },
      ],
      link: [
        // Prefer a standard .ico favicon for broad support
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Keep an SVG fallback if available
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        // Apple touch icon for iOS devices
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },
})
