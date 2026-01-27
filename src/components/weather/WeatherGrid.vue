<template>
  <div class="w-full max-w-full overflow-x-auto">
    <!-- Grid Headers -->
    <!-- <GridHeader /> -->

    <!-- City Rows -->
    <div class="flex flex-col gap-4 p-2 rounded-lg transition-all duration-300">
      <div
        v-for="(location, index) in enabledLocations"
        :key="location.id"
        :class="[
          'grid gap-2 p-2 rounded-lg bg-neutral-100 transition-all duration-300',
          'grid-cols-[6rem_1fr]' /* default */,
          !location.enabled && 'opacity-50 grayscale',
        ]"
      >
        <!-- City Label -->
        <div
          class="flex flex-col items-center justify-center text-center bg-neutral-200 rounded-lg p-2 min-h-20 min-w-24 w-24 max-w-24"
        >
          <span class="font-semibold text-sm text-green-900 mb-1 sm:mb-0">
            {{ location.desa }}
          </span>
          <span class="text-xs text-gray-800">{{ location.kecamatan }}</span>
          <span class="text-xs text-gray-800">{{ location.kotkab }}</span>
          <span class="text-xs text-gray-800">{{ location.provinsi }}</span>
        </div>

        <!-- Weather Boxes Row -->
        <div
          :ref="(el) => registerScrollContainer(el, index)"
          @scroll="handleScroll"
          class="flex gap-2 w-full overflow-y-auto"
        >
          <WeatherBox
            v-for="timeSlot in timeSlots"
            :key="`${location.id}-${timeSlot.hour}`"
            :weather-data="getWeatherBoxData(location.id, timeSlot)"
            :loading="isLoading(location.id)"
            :error="getError(location.id)"
            :time-slot="timeSlot"
          />
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div
      v-if="enabledLocations.length === 0"
      class="flex flex-col items-center justify-center p-16 text-center text-gray-200"
    >
      <i class="pi pi-info-circle text-5xl mb-4 text-green-900"></i>
      <p class="text-green-800 text-lg m-0">
        No locations enabled. Please enable locations to view weather data.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { useLocations } from '@/composables/useLocations'
import { useWeatherStore } from '@/stores/weatherStore'
import type { BMKGWeatherData } from '@/types/weather'
import type { TimeSlot } from '@/utils/timeSlots'

import WeatherBox from './WeatherBox.vue'

const weatherStore = useWeatherStore()
const locations = useLocations()

const { enabledLocations } = locations

// Scroll synchronization state
const scrollPosition = ref(0)
const scrollContainers = ref<(HTMLElement | null)[]>([])

// Register scroll container refs
const registerScrollContainer = (
  el: Element | null | { $el: Element },
  index: number,
) => {
  const element = el && '$el' in el ? el.$el : el // Handle both Element and ComponentPublicInstance
  scrollContainers.value[index] = element as HTMLElement
}

// Handle scroll synchronization
const handleScroll = (event: Event) => {
  const target = event.target as HTMLElement
  const newScrollLeft = target.scrollLeft

  if (newScrollLeft !== scrollPosition.value) {
    scrollPosition.value = newScrollLeft

    // Synchronize all other containers
    scrollContainers.value.forEach((container) => {
      if (container && container !== target) {
        container.scrollLeft = newScrollLeft
      }
    })
  }
}

// Dynamic time slots based on first available location
const timeSlots = computed<TimeSlot[]>(() => {
  if (enabledLocations.value.length === 0) return []
  const firstLocation = enabledLocations.value[0]
  if (!firstLocation) return []
  return weatherStore.getAvailableTimeSlots(firstLocation.id)
})

// Get weather data for specific box
const getWeatherBoxData = (
  locationId: string,
  timeSlot: TimeSlot,
): BMKGWeatherData | null => {
  return weatherStore.getWeatherBoxData(locationId, timeSlot)
}

// Loading state
const isLoading = (locationId: string): boolean => {
  return weatherStore.isLoading(locationId)
}

// Error state
const getError = (locationId: string): string | null => {
  return weatherStore.getError(locationId)
}
</script>
