<template>
  <div class="flex-1">
    <label :for="`${id}-dropdown`" class="block text-sm font-medium mb-2">{{ label }}</label>
    <div class="relative" v-click-outside="handleClickOutside">
      <div class="relative">
        <input
          :id="`${id}-dropdown`"
          v-model="searchQuery"
          type="text"
          :placeholder="selectedTimezone ? '' : 'Search timezone...'"
          class="w-full px-3 py-2 pr-10 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          :class="{ 'font-medium': selectedTimezone && !searchQuery }"
          role="combobox"
          :aria-expanded="isOpen"
          :aria-controls="`${id}-listbox`"
          aria-autocomplete="list"
          :aria-activedescendant="activeDescendant"
          @focus="isOpen = true"
          @input="isOpen = true"
          @keydown="handleKeydown"
        />
        <div
          v-if="selectedTimezone && !searchQuery && !isOpen"
          class="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none"
        >
          <span class="text-xl">{{ selectedTimezone.flag }}</span>
          <span class="font-medium text-gray-900 dark:text-white">{{
            selectedTimezone.label
          }}</span>
        </div>
        <button
          v-if="modelValue && !isOpen"
          type="button"
          class="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
          title="Clear selection"
          aria-label="Clear timezone selection"
          @click="clearSelection"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <svg
          v-else
          class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none transition-transform"
          :class="{ 'rotate-180': isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        leave-active-class="transition duration-150 ease-in"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="isOpen && filteredTimezones.length > 0"
          :id="`${id}-listbox`"
          class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto"
          role="listbox"
        >
          <button
            v-for="(tz, index) in filteredTimezones"
            :key="tz.value"
            :id="`${props.id}-option-${index}`"
            type="button"
            role="option"
            :aria-selected="modelValue === tz.value"
            class="w-full px-3 py-2.5 text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 flex items-center gap-3 transition-colors cursor-pointer"
            :class="{ 'bg-blue-100 dark:bg-blue-900/30': modelValue === tz.value }"
            @click="selectTimezone(tz.value)"
          >
            <span class="text-xl">{{ tz.flag }}</span>
            <div class="flex-1 min-w-0">
              <div class="font-medium text-sm truncate">{{ tz.label }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ tz.country }}</div>
            </div>
            <svg
              v-if="modelValue === tz.value"
              class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Timezone } from '~/types'

interface Props {
  id: string
  label: string
  modelValue: string
  timezones: Timezone[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isOpen = ref(false)
const searchQuery = ref('')
const activeIndex = ref(-1)

const selectedTimezone = computed(() => props.timezones.find((t) => t.value === props.modelValue))

const activeDescendant = computed(() => {
  if (activeIndex.value >= 0 && activeIndex.value < filteredTimezones.value.length) {
    return `${props.id}-option-${activeIndex.value}`
  }
  return undefined
})

const filteredTimezones = computed(() => {
  const search = searchQuery.value.toLowerCase()
  if (!search) return props.timezones
  return props.timezones.filter((t) => {
    const labelMatch = t.label.toLowerCase().includes(search)
    const countryMatch = t.country.toLowerCase().includes(search)
    const searchTermsMatch = t.searchTerms?.some((term) => term.toLowerCase().includes(search))
    return labelMatch || countryMatch || searchTermsMatch
  })
})

const selectTimezone = (value: string) => {
  emit('update:modelValue', value)
  isOpen.value = false
  searchQuery.value = ''
}

const clearSelection = () => {
  emit('update:modelValue', '')
  searchQuery.value = ''
  isOpen.value = true
}

// Select first result on Enter
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && searchQuery.value && filteredTimezones.value.length > 0) {
    const firstResult = filteredTimezones.value[0]
    if (firstResult) {
      selectTimezone(firstResult.value)
      // Deselect textbox after Enter
      ;(event.target as HTMLInputElement)?.blur()
    }
  } else if (event.key === 'Escape') {
    // Close dropdown on Escape
    isOpen.value = false
    searchQuery.value = ''
    ;(event.target as HTMLInputElement)?.blur()
  }
}

// Auto-complete to first result when clicking outside or losing focus
const handleClickOutside = () => {
  if (searchQuery.value && filteredTimezones.value.length > 0 && isOpen.value) {
    const firstResult = filteredTimezones.value[0]
    if (firstResult) {
      selectTimezone(firstResult.value)
    }
  } else {
    isOpen.value = false
    searchQuery.value = ''
  }
}

// Close dropdown when clicking outside
interface HTMLElementWithEvent extends HTMLElement {
  clickOutsideEvent?: (event: Event) => void
}

const vClickOutside = {
  mounted(el: HTMLElementWithEvent, binding: any) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: HTMLElementWithEvent) {
    if (el.clickOutsideEvent) {
      document.removeEventListener('click', el.clickOutsideEvent)
    }
  },
}
</script>
