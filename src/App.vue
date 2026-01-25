<template>
  <div class="min-h-screen flex flex-col">
    <header
      class="bg-white border-b-neutral-200 sticky z-10 p-4 md:px-8 md:py-4 border-b border-solid top-0"
    >
      <div
        class="flex gap-4 text-center sm:justify-between sm:items-center sm:max-w-300 sm:mx-auto sm:my-0"
      >
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold m-0">🌤️ Weather App</h1>
          <span class="text-sm opacity-70 mt-0.5"
            >Indonesia Weather Forecast</span
          >
        </div>

        <div
          class="flex flex-col justify-center w-full sm:flex-row sm:w-auto gap-3 items-center"
        >
          <Button
            icon="pi pi-cog"
            label="Settings"
            @click="showSettings = true"
            severity="secondary"
            :outlined="true"
          />
          <Button
            icon="pi pi-list"
            label="Manage Locations"
            @click="showLocationManager = true"
            severity="secondary"
            :outlined="true"
          />
          <Button
            icon="pi pi-refresh"
            label="Refresh All"
            @click="refreshAllWeather"
            :loading="isRefreshingAll"
          />

          <!-- Auto-refresh status indicator -->
          <div
            v-if="preferencesStore.preferences.autoRefresh"
            class="flex items-center gap-2 text-xs text-green-600"
          >
            <i class="pi pi-sync pi-spin"></i>
            <span
              >Auto: {{ preferencesStore.preferences.refreshInterval }}m</span
            >
          </div>
        </div>
      </div>
    </header>

    <main class="flex-1 max-w-300 w-full mx-auto my-0 p-4">
      <!-- Weather Grid -->
      <WeatherGrid />

      <!-- Location Manager -->
      <LocationManager
        v-model:visible="showLocationManager"
        :max-locations="maxLocations"
      />

      <!-- Settings Dialog -->
      <Dialog
        v-model:visible="showSettings"
        header="Settings"
        modal
        class="max-w-md w-full"
      >
        <div class="flex flex-col gap-4">
          <!-- Auto-refresh Toggle -->
          <div class="flex items-center justify-between">
            <span class="font-medium">Auto-refresh</span>
            <ToggleButton
              v-model="autoRefreshEnabled"
              onLabel="Enabled"
              offLabel="Disabled"
            />
          </div>

          <!-- Refresh Interval -->
          <div class="flex flex-col gap-2">
            <span class="font-medium">Refresh Interval</span>
            <Dropdown
              v-model="selectedInterval"
              :options="intervalOptions"
              optionLabel="label"
              optionValue="value"
              class="w-full"
            />
          </div>
        </div>
      </Dialog>
    </main>

    <footer
      class="bg-white border-t-neutral-200 text-center mt-auto px-8 py-6 border-t border-solid"
    >
      <p class="opacity-80 mt-0 mb-2 mx-0">
        Weather data from BMKG (Indonesian Meteorological Agency)
      </p>
      <small class="opacity-60">Last updated: {{ lastUpdatedTime }}</small>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

import LocationManager from '@/components/weather/LocationManager.vue'
import WeatherGrid from '@/components/weather/WeatherGrid.vue'
import { useLocations } from '@/composables/useLocations'
import locationsConfig from '@/config/locations.json'
import { usePreferencesStore } from '@/stores/preferencesStore'
import { useWeatherStore } from '@/stores/weatherStore'

// Composables and stores
const locations = useLocations()
const weatherStore = useWeatherStore()
const preferencesStore = usePreferencesStore()

// Reactive data
const showLocationManager = ref(false)
const showSettings = ref(false)
const isRefreshingAll = ref(false)
let refreshInterval: number | null = null

// Computed properties
const { enabledLocations } = locations
const maxLocations = computed(() => 10)

// Settings UI reactive state
const autoRefreshEnabled = computed({
  get: () => preferencesStore.preferences.autoRefresh,
  set: (value) => preferencesStore.updatePreference('autoRefresh', value),
})
const selectedInterval = computed({
  get: () => preferencesStore.preferences.refreshInterval,
  set: (value) => preferencesStore.updatePreference('refreshInterval', value),
})

const intervalOptions = [
  { label: '5 minutes', value: 5 },
  { label: '10 minutes', value: 10 },
  { label: '15 minutes', value: 15 },
  { label: '30 minutes', value: 30 },
]

// Last updated time for all locations
const lastUpdatedTime = computed(() => {
  const updatedTimes = Array.from(weatherStore.lastUpdated.values())
  if (updatedTimes.length === 0) return 'Never'

  const latest = new Date(Math.max(...updatedTimes.map((d) => d.getTime())))
  return latest.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    month: 'short',
    day: 'numeric',
  })
})

// Actions
const refreshAllWeather = async () => {
  if (!enabledLocations.value.length) {
    console.warn('No enabled locations to refresh')
    return
  }

  isRefreshingAll.value = true
  try {
    await weatherStore.refreshAllLocations(enabledLocations.value)
  } catch (error) {
    console.error('Failed to refresh all weather:', error)
  } finally {
    if (isRefreshingAll.value) {
      isRefreshingAll.value = false
    }
  }
}

// Auto-refresh
const startAutoRefresh = () => {
  if (!preferencesStore.preferences.autoRefresh) {
    console.log('Auto-refresh disabled by user preference')
    return
  }

  const intervalMs = preferencesStore.preferences.refreshInterval * 60 * 1000
  console.log(
    `Starting auto-refresh: every ${preferencesStore.preferences.refreshInterval} minutes`,
  )

  refreshInterval = window.setInterval(() => {
    console.log('Auto-refreshing weather data...')
    refreshAllWeather()
  }, intervalMs)
}

const stopAutoRefresh = () => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
    refreshInterval = null
    console.log('Auto-refresh stopped')
  }
}

const restartAutoRefresh = () => {
  stopAutoRefresh()
  startAutoRefresh()
}

// Preference change watchers
watch(
  () => preferencesStore.preferences.autoRefresh,
  () => restartAutoRefresh(),
)

watch(
  () => preferencesStore.preferences.refreshInterval,
  () => restartAutoRefresh(),
)

// Lifecycle
onMounted(async () => {
  // Ensure preferences are initialized with defaults from locations.json
  if (!localStorage.getItem('weather:preferences')) {
    preferencesStore.updatePreference(
      'refreshInterval',
      locationsConfig.settings.refreshInterval,
    )
    preferencesStore.updatePreference(
      'maxLocations',
      locationsConfig.settings.maxEnabled,
    )
  }

  // Load cached data first
  enabledLocations.value.forEach((location) => {
    weatherStore.loadCachedData(location.id)
  })

  // Then fetch fresh data
  await refreshAllWeather()

  // Start auto-refresh (respecting user preference)
  startAutoRefresh()
})

onUnmounted(() => {
  stopAutoRefresh()
})

// Handle visibility change to pause/resume refresh
const handleVisibilityChange = () => {
  if (document.hidden) {
    // Optional: Pause refresh when tab is inactive to save resources
    if (preferencesStore.preferences.autoRefresh) {
      stopAutoRefresh()
    }
  } else {
    // Resume when tab becomes active
    if (preferencesStore.preferences.autoRefresh) {
      startAutoRefresh()
      refreshAllWeather() // Immediate refresh on return
    }
  }
}

onMounted(() => {
  document.addEventListener('visibilitychange', handleVisibilityChange)
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>
