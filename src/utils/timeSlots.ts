import type { BMKGWeatherData } from '@/types/weather'

export interface TimeSlot {
  hour: number
  label: string
}

/**
 * Generate dynamic time slots based on available weather data
 * @param weatherData Array of hourly weather data
 * @returns Array of time slots with data availability
 */
export const generateTimeSlots = (
  weatherData: BMKGWeatherData[] | undefined,
): TimeSlot[] => {
  const slots: TimeSlot[] = []

  if (!weatherData) {
    return slots
  }

  weatherData.forEach((data) => {
    const dataHour = new Date(data.local_datetime).getHours()

    slots.push({
      hour: dataHour,
      label: `${dataHour.toString().padStart(2, '0')}:00`,
    })
  })

  return slots
}

/**
 * Find weather data for a specific time slot
 * @param weatherData Array of hourly weather data
 * @param targetHour Target hour (0-23)
 * @returns Weather data for the specified hour or null if not found
 */
export const findWeatherDataForHour = (
  weatherData: BMKGWeatherData[] | undefined,
  targetHour: number,
): BMKGWeatherData | null => {
  if (!weatherData) {
    return null
  }

  for (const data of weatherData) {
    try {
      const dataHour = new Date(data.local_datetime).getHours()
      if (dataHour === targetHour) {
        return data
      }
    } catch {
      continue
    }
  }
  return null
}

/**
 * Get all available hours from weather data
 * @param weatherData Array of hourly weather data
 * @returns Array of unique hours that have data
 */
export const getAvailableHours = (weatherData: BMKGWeatherData[]): number[] => {
  const hours = new Set<number>()

  weatherData.forEach((data) => {
    try {
      const hour = new Date(data.local_datetime).getHours()
      hours.add(hour)
    } catch {
      // Skip invalid datetime
    }
  })

  return Array.from(hours).sort((a, b) => a - b)
}
