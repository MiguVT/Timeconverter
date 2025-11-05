// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-11-05',
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
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        {
          name: 'description',
          content:
            'Beautiful, fast, and ad-free timezone converter. Convert time between any timezone instantly. No ads, no tracking, just simple time conversion.',
        },
        {
          name: 'keywords',
          content:
            'timezone converter, time zone, time conversion, world clock, UTC converter, time calculator, international time, timezone tool',
        },
        { name: 'author', content: 'MiguVT' },
        { name: 'creator', content: 'MiguVT' },
        { name: 'publisher', content: 'MiguVT' },
        { name: 'theme-color', content: '#3b82f6' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'Timezone Converter' },
        { name: 'application-name', content: 'Timezone Converter' },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://time.miguvt.com/' },
        { property: 'og:title', content: 'Timezone Converter - Fast & Simple' },
        {
          property: 'og:description',
          content:
            'Beautiful, fast, and ad-free timezone converter. Convert time between any timezone instantly.',
        },
        { property: 'og:site_name', content: 'Timezone Converter' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@MiguVT' },
        { name: 'twitter:creator', content: '@MiguVT' },
        { name: 'twitter:title', content: 'Timezone Converter - Fast & Simple' },
        {
          name: 'twitter:description',
          content:
            'Beautiful, fast, and ad-free timezone converter. Convert time between any timezone instantly.',
        },
        // Additional SEO
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        },
        { name: 'googlebot', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://time.miguvt.com/' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Timezone Converter',
            description:
              'Beautiful, fast, and ad-free timezone converter. Convert time between any timezone instantly.',
            url: 'https://time.miguvt.com/',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            author: {
              '@type': 'Person',
              name: 'MiguVT',
              url: 'https://github.com/MiguVT',
            },
            creator: {
              '@type': 'Person',
              name: 'MiguVT',
              url: 'https://github.com/MiguVT',
            },
            datePublished: '2024-01-01',
            dateModified: '2025-11-05',
            inLanguage: 'en-US',
            isAccessibleForFree: true,
            screenshot: 'https://time.miguvt.com/apple-touch-icon.png',
          }),
        },
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
