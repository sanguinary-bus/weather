import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { readonly } from 'vue'

import type { UserPreferences } from '@/types/weather'

const DEFAULT_PREFERENCES: UserPreferences = {
  temperatureUnit: 'celsius',
  windSpeedUnit: 'kmh',
  language: 'en',
  timeFormat: '24h',
  autoRefresh: true,
  refreshInterval: 15,
  maxLocations: 10,
}

export const usePreferencesStore = defineStore('preferences', () => {
  const preferences = useLocalStorage<UserPreferences>(
    'weather:preferences',
    DEFAULT_PREFERENCES,
  )

  const updatePreference = <K extends keyof UserPreferences>(
    key: K,
    value: UserPreferences[K],
  ) => {
    preferences.value = { ...preferences.value, [key]: value }
  }

  const resetPreferences = () => {
    preferences.value = { ...DEFAULT_PREFERENCES }
  }

  return {
    preferences: readonly(preferences),
    updatePreference,
    resetPreferences,
  }
})
