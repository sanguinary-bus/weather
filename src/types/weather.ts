export interface LocationConfig {
  id: string
  provinsi: string
  kotkab: string
  kecamatan: string
  desa: string
  lat: number
  lon: number
  timezone: string
  enabled: boolean
  order: number
}

export interface BMKGWeatherData {
  datetime: string
  utc_datetime: string // utc_datetime
  local_datetime: string
  t: number // temperature (Celsius)
  tcc: number // cloudCover (percentage)
  tp: number // precipitation (mm)
  weather: number // weatherCode
  weather_desc: string // weatherDesc (Indonesian)
  weather_desc_en: string // weatherDescEn (English)
  wd_deg: number // windDegree
  wd: string // windDirection (W, SW, etc)
  wd_to: string // windDirectionTo
  ws: number // windSpeed (km/h)
  hu: number // humidity (percentage)
  vs: number // visibility (meters)
  vs_text: string // visibilityText
  time_index: string // timeIndex
  analysis_date: string // analysisDate
  image: string // image
}

export interface LocationInfo {
  adm1: string
  adm2: string
  adm3: string
  adm4: string
  provinsi: string
  kotkab: string
  kecamatan: string
  desa: string
  lon: number
  lat: number
  distance: number
  timezone: string
  type?: string
}

export interface DataInfo {
  lokasi: LocationInfo
  cuaca: BMKGWeatherData[][]
}

export interface BMKGResponse {
  lokasi: LocationInfo
  data: DataInfo[]
}

export interface LocationsConfig {
  locations: LocationConfig[]
  settings: {
    maxEnabled: number
    refreshInterval: number
    temperatureUnit: 'celsius' | 'fahrenheit'
    windSpeedUnit: 'kmh' | 'mph' | 'ms'
    language: 'id' | 'en'
    timeFormat: '12h' | '24h'
  }
}

export interface CachedWeatherData {
  data: DataInfo | undefined
  cachedAt: string
  expiresAt: string
}

export interface UserPreferences {
  temperatureUnit: 'celsius' | 'fahrenheit'
  windSpeedUnit: 'kmh' | 'mph' | 'ms'
  language: 'id' | 'en'
  timeFormat: '12h' | '24h'
  autoRefresh: boolean
  refreshInterval: number
  maxLocations: number
}
