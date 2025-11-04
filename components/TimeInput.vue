<template>
  <div class="mb-6">
    <label for="time-input" class="block text-sm font-medium mb-2">Time</label>
    <div class="flex gap-2">
      <input
        id="time-input"
        :value="modelValue"
        type="time"
        class="flex-1 px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition tabular-nums"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <button
        type="button"
        class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 outline-none cursor-pointer"
        @click="$emit('set-now')"
        title="Set current time"
      >
        Now
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
  'set-now': []
}>()
</script>
