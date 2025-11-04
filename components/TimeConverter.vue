<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
  >
    <TimeInput v-model="time" @set-now="setNow" />

    <div class="flex flex-col md:flex-row gap-4 md:items-end mb-6">
      <TimezoneDropdown id="from" v-model="fromTimezone" label="From" :timezones="timezones" />

      <div class="flex justify-center md:pb-0">
        <button
          type="button"
          class="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 active:scale-95 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 outline-none group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Swap timezones"
          title="Swap timezones"
          :disabled="!fromTimezone || !toTimezone"
          @click="swapTimezones"
        >
          <svg
            class="w-5 h-5 rotate-0 group-hover:rotate-180 transition-transform duration-300 md:rotate-90 md:group-hover:rotate-[270deg]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
        </button>
      </div>

      <TimezoneDropdown id="to" v-model="toTimezone" label="To" :timezones="timezones" />
    </div>

    <ConversionResult :result="result" :timezone="toValue" />
  </div>
</template>

<script setup lang="ts">
const { timezones, convertTime } = useTimezones()

const time = ref('')
const fromTimezone = ref('')
const toTimezone = ref('')

const toValue = computed(() => timezones.find((t) => t.value === toTimezone.value))
const result = computed(() => convertTime(time.value, fromTimezone.value, toTimezone.value))

const setNow = () => {
  const now = new Date()
  time.value = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(
    2,
    '0',
  )}`

  // Auto-detect user's timezone
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  // Use detected timezone if available in our list and not already set
  const matchedTimezone = timezones.find((tz) => tz.value === userTimezone)
  if (matchedTimezone && !fromTimezone.value) {
    fromTimezone.value = matchedTimezone.value
  }
}

const swapTimezones = () => {
  ;[fromTimezone.value, toTimezone.value] = [toTimezone.value, fromTimezone.value]
}

// Auto-set current time on mount
onMounted(() => {
  setNow()
})
</script>
