<template>
  <transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 scale-90 translate-y-4"
    leave-active-class="transition-all duration-300 ease-in"
    leave-to-class="opacity-0 scale-95"
    mode="out-in"
  >
    <div
      v-if="result"
      :key="result"
      class="relative overflow-hidden p-6 bg-linear-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800 shadow-lg"
    >
      <div class="absolute inset-0 bg-linear-to-r from-blue-400/10 to-cyan-400/10 animate-pulse" />
      <div class="relative">
        <p
          class="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 text-center uppercase tracking-wide"
        >
          Converted Time
        </p>
        <p
          class="text-5xl font-bold text-center text-blue-900 dark:text-blue-100 mb-2 tracking-tight tabular-nums"
        >
          {{ result }}
        </p>
        <div
          class="flex items-center justify-center gap-2 text-sm text-blue-600 dark:text-blue-400"
        >
          <span class="text-lg">{{ timezone?.flag }}</span>
          <span class="font-medium">{{ timezone?.label }}</span>
          <span class="text-blue-400 dark:text-blue-500">•</span>
          <span class="text-xs">{{ timezone?.country }}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import type { Timezone } from '~/types'

defineProps<{
  result: string
  timezone?: Timezone
}>()
</script>
