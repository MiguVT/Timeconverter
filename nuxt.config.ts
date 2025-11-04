// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // SSR disabled for static site generation
  ssr: false,

  modules: ['@vueuse/nuxt', '@nuxtjs/color-mode'],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
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
      title: 'Timezone Converter - Fast & Simple Time Zone Conversion',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Beautiful, fast, and ad-free timezone converter. Convert time between any timezone instantly. No ads, no tracking, just simple time conversion.',
        },
        {
          name: 'keywords',
          content: 'timezone converter, time zone, time conversion, world clock, UTC converter',
        },
        { name: 'theme-color', content: '#3b82f6' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Timezone Converter - Fast & Simple' },
        { property: 'og:description', content: 'Beautiful, fast, and ad-free timezone converter' },
        { property: 'og:site_name', content: 'Timezone Converter' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Timezone Converter' },
        { name: 'twitter:description', content: 'Beautiful, fast, and ad-free timezone converter' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: false,
  },

  // Build optimizations
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router'],
          },
        },
      },
    },
  },
})
