// Format time from "2026-01-11 12:00:00" to "12:00"
export const formatTime = (datetime: string): string => {
  return datetime.split(' ')[1]?.substring(0, 5) || ''
}

// Format date for display
export const formatDate = (datetime: string): string => {
  return new Date(datetime).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

// Format full datetime
export const formatDateTime = (datetime: string): string => {
  return new Date(datetime).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Get wind direction icon class
export const getWindIcon = (direction: string): string => {
  const windIcons: Record<string, string> = {
    N: 'pi pi-arrow-up',
    NE: 'pi pi-arrow-up-right',
    E: 'pi pi-arrow-right',
    SE: 'pi pi-arrow-down-right',
    S: 'pi pi-arrow-down',
    SW: 'pi pi-arrow-down-left',
    W: 'pi pi-arrow-left',
    NW: 'pi pi-arrow-up-left',
  }
  return windIcons[direction] || 'pi-circle'
}

// Get wind rotation angle for arrow display
export const getWindRotation = (degree: number): number => {
  return degree + 180 // Arrow points opposite to wind direction
}

// Get day label from index
export const getDayLabel = (index: number): string => {
  const days = ['Today', 'Tomorrow', 'Day after Tomorrow']
  return days[index] || `Day ${index + 1}`
}

// Format visibility text
export const formatVisibility = (visibility: number): string => {
  if (visibility >= 10000) return '> 10 km'
  if (visibility >= 5000) return `${(visibility / 1000).toFixed(1)} km`
  return `${(visibility / 1000).toFixed(1)} km`
}

// Format precipitation amount
export const formatPrecipitation = (precipitation: number): string => {
  if (precipitation === 0) return ''
  return `${precipitation} mm`
}
