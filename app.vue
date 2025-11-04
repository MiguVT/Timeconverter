<template>
  <div
    class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
  >
    <AppHeader />

    <main class="flex-1 flex items-center justify-center px-4 py-12">
      <div class="w-full max-w-xl">
        <div class="text-center mb-8 animate-fade-in">
          <h2
            class="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent"
          >
            Timezone Converter
          </h2>
          <p class="text-gray-600 dark:text-gray-400">Simple, fast, no distractions</p>
        </div>

        <TimeConverter />
      </div>
    </main>

    <AppFooter />

    <Analytics />
  </div>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/nuxt'
</script>
