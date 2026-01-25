import { useLocalStorage } from '@vueuse/core'
import { computed, ref } from 'vue'

import locationsConfig from '@/config/locations.json'
import type { LocationConfig } from '@/types/weather'

const STORAGE_KEYS = {
  LOCATIONS: 'weather:locations',
  ENABLED: 'weather:enabled',
  ORDER: 'weather:order',
  PREFERENCES: 'weather:preferences',
} as const

export function useLocations() {
  // All available locations from config
  const allLocations = ref<LocationConfig[]>(locationsConfig.locations)

  // User enabled locations (array of IDs)
  const enabledLocationIds = useLocalStorage<string[]>(
    STORAGE_KEYS.ENABLED,
    locationsConfig.locations
      .filter((loc: LocationConfig) => loc.enabled)
      .map((loc: LocationConfig) => loc.id),
  )

  // Custom order of locations
  const locationOrder = useLocalStorage<string[]>(
    STORAGE_KEYS.ORDER,
    locationsConfig.locations
      .filter((loc) => loc.enabled)
      .sort((a, b) => a.order - b.order)
      .map((loc) => loc.id),
  )

  // Computed enabled locations with custom order
  const enabledLocations = computed(() => {
    const enabled = allLocations.value.filter((loc) =>
      enabledLocationIds.value.includes(loc.id),
    )

    // Apply custom order
    return enabled.sort((a: LocationConfig, b: LocationConfig) => {
      const aIndex = locationOrder.value.indexOf(a.id)
      const bIndex = locationOrder.value.indexOf(b.id)
      if (aIndex === -1) return 1
      if (bIndex === -1) return -1
      return aIndex - bIndex
    })
  })

  // Get location by ID
  const getLocationById = (id: string): LocationConfig | undefined => {
    return allLocations.value.find((loc) => loc.id === id)
  }

  // Toggle location enabled/disabled
  const toggleLocation = (locationId: string) => {
    const index = enabledLocationIds.value.indexOf(locationId)
    if (index > -1) {
      // Remove from enabled
      enabledLocationIds.value = enabledLocationIds.value.filter(
        (id) => id !== locationId,
      )
      locationOrder.value = locationOrder.value.filter(
        (id) => id !== locationId,
      )
    } else {
      // Add to enabled (at the end)
      enabledLocationIds.value.push(locationId)
      locationOrder.value.push(locationId)
    }
  }

  // Move location up in order
  const moveLocationUp = (locationId: string) => {
    const index = locationOrder.value.indexOf(locationId)
    if (index > 0) {
      // Swap with previous
      const temp = locationOrder.value[index - 1] || ''
      locationOrder.value[index - 1] = locationOrder.value[index] || ''
      locationOrder.value[index] = temp
    }
  }

  // Move location down in order
  const moveLocationDown = (locationId: string) => {
    const index = locationOrder.value.indexOf(locationId)
    if (index < locationOrder.value.length - 1) {
      // Swap with next
      const temp = locationOrder.value[index + 1] || ''
      locationOrder.value[index + 1] = locationOrder.value[index] || ''
      locationOrder.value[index] = temp
    }
  }

  // Check if location is enabled
  const isLocationEnabled = (locationId: string): boolean => {
    return enabledLocationIds.value.includes(locationId)
  }

  // Check if location is first in order
  const isFirstLocation = (locationId: string): boolean => {
    const first = locationOrder.value[0]
    return (first || '') === locationId
  }

  // Check if location is last in order
  const isLastLocation = (locationId: string): boolean => {
    const last = locationOrder.value[locationOrder.value.length - 1]
    return last ? last === locationId : false
  }

  return {
    allLocations,
    enabledLocations,
    enabledLocationIds,
    locationOrder,
    getLocationById,
    toggleLocation,
    moveLocationUp,
    moveLocationDown,
    isLocationEnabled,
    isFirstLocation,
    isLastLocation,
  }
}
