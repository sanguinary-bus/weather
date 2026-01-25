import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'

import { BMKGApiService } from '@/services/bmkgApi'
import type {
  BMKGWeatherData,
  CachedWeatherData,
  DataInfo,
  LocationConfig,
} from '@/types/weather'
import {
  findWeatherDataForHour,
  generateTimeSlots,
  type TimeSlot,
} from '@/utils/timeSlots'

export const useWeatherStore = defineStore('weather', () => {
  const bmkgService = new BMKGApiService()

  // Weather data for each location
  const weatherData = ref<Map<string, DataInfo | undefined>>(new Map())
  const loading = ref<Map<string, boolean>>(new Map())
  const errors = ref<Map<string, string>>(new Map())
  const lastUpdated = ref<Map<string, Date>>(new Map())

  // Fetch weather for specific location
  const fetchWeatherForLocation = async (location: LocationConfig) => {
    const locationId = location.id

    // Set loading state
    loading.value.set(locationId, true)
    errors.value.set(locationId, '')

    try {
      const { data } = await bmkgService.getForecast(location.lat, location.lon)
      const firstDataInfo = data[0]

      weatherData.value.set(locationId, firstDataInfo)
      lastUpdated.value.set(locationId, new Date())

      // Cache to localStorage
      cacheWeatherData(locationId, firstDataInfo)
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to fetch weather'
      errors.value.set(locationId, errorMessage)
      console.error(`Failed to fetch weather for ${location.desa}:`, error)
    } finally {
      loading.value.set(locationId, false)
    }
  }

  // Get weather data for location
  const getWeatherData = (locationId: string): DataInfo | null => {
    return weatherData.value.get(locationId) || null
  }

  // Get available time slots for a location
  const getAvailableTimeSlots = (locationId: string): TimeSlot[] => {
    const weatherResponse = weatherData.value.get(locationId)

    if (!weatherResponse) {
      return []
    }

    const cuacaList = weatherResponse.cuaca

    if (cuacaList.length === 0) {
      return []
    }

    if (cuacaList.length === 1) {
      return generateTimeSlots(cuacaList[0])
    }

    return generateTimeSlots(cuacaList[0]!.concat(cuacaList[1]!))
  }

  // Get weather data for specific time slot
  const getWeatherBoxData = (
    locationId: string,
    timeSlot: TimeSlot,
  ): BMKGWeatherData | null => {
    const weatherResponse = weatherData.value.get(locationId)

    if (!weatherResponse) {
      return null
    }

    const cuacaList = weatherResponse.cuaca

    if (cuacaList.length === 0) {
      return null
    }

    if (cuacaList.length === 1) {
      return findWeatherDataForHour(cuacaList[0], timeSlot.hour)
    }

    // Find specific hour data
    return findWeatherDataForHour(cuacaList[0]!.concat(cuacaList[1]!), timeSlot.hour)
  }

  // Get loading state for location
  const isLoading = (locationId: string): boolean => {
    return loading.value.get(locationId) || false
  }

  // Get error for location
  const getError = (locationId: string): string | null => {
    return errors.value.get(locationId) || null
  }

  // Get last updated time
  const getLastUpdated = (locationId: string): Date | null => {
    return lastUpdated.value.get(locationId) || null
  }

  // Cache weather data to localStorage
  const cacheWeatherData = (locationId: string, data: DataInfo | undefined) => {
    try {
      const cacheKey = `weather:cache:${locationId}`
      const cacheData: CachedWeatherData = {
        data,
        cachedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString(), // 10 minutes
      }
      localStorage.setItem(cacheKey, JSON.stringify(cacheData))
    } catch (error) {
      console.warn('Failed to cache weather data:', error)
    }
  }

  // Load cached data from localStorage
  const loadCachedData = (locationId: string): DataInfo | null => {
    try {
      const cacheKey = `weather:cache:${locationId}`
      const cached = localStorage.getItem(cacheKey)

      if (cached) {
        const cacheData = JSON.parse(cached) as CachedWeatherData
        const expiresAt = new Date(cacheData.expiresAt)

        if (expiresAt > new Date() && cacheData.data) {
          weatherData.value.set(locationId, cacheData.data)
          lastUpdated.value.set(locationId, new Date(cacheData.cachedAt))
          return cacheData.data
        } else {
          // Remove expired cache
          localStorage.removeItem(cacheKey)
        }
      }
    } catch (error) {
      console.warn('Failed to load cached weather data:', error)
    }

    return null
  }

  // Refresh all enabled locations
  const refreshAllLocations = async (locations: LocationConfig[]) => {
    const promises = locations.map((location) =>
      fetchWeatherForLocation(location),
    )
    await Promise.allSettled(promises)
  }

  // Clear all cached data
  const clearCache = () => {
    try {
      Object.keys(localStorage)
        .filter((key) => key.startsWith('weather:cache:'))
        .forEach((key) => localStorage.removeItem(key))
    } catch (error) {
      console.warn('Failed to clear cache:', error)
    }
  }

  return {
    weatherData: readonly(weatherData),
    loading: readonly(loading),
    errors: readonly(errors),
    lastUpdated: readonly(lastUpdated),
    fetchWeatherForLocation,
    getWeatherData,
    getAvailableTimeSlots,
    getWeatherBoxData,
    isLoading,
    getError,
    getLastUpdated,
    loadCachedData,
    refreshAllLocations,
    clearCache,
  }
})
