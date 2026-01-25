<template>
  <div
    class="min-w-24 w-24 max-w-24 h-full min-h-30 border border-neutral-200 rounded-lg bg-neutral-200 flex flex-col items-center justify-center p-1.5 transition-all duration-200 relative
           hover:bg-neutral-300 hover:border-neutral-300 hover:-translate-y-0.5 hover:shadow-lg
           data-loading:bg-neutral-100 data-loading:opacity-70
           data-error:bg-red-50 data-error:border-red-200
           md:min-h-25
           sm:min-h-20"
    :class="{
      'data-loading': loading,
      'data-error': !!error
    }"
  >
    <!-- Loading -->
    <div v-if="loading" class="flex items-center justify-center h-full text-3xl text-gray-800">
      <i class="pi pi-spin pi-spinner text-green-200"></i>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="flex items-center justify-center h-full text-3xl text-gray-800">
      <i class="pi pi-exclamation-triangle text-red-500"></i>
    </div>

    <!-- Weather Data -->
    <div
      v-else-if="weatherData"
      class="flex flex-col items-center gap-2 w-full text-center"
    >
      <!-- Time Label -->
      <div v-if="timeSlot" class="text-sm font-semibold text-gray-800">
        {{ timeSlot.label }}
      </div>

      <!-- Weather Icon -->
      <div class="flex items-center justify-center h-8">
        <img
          :src="weatherData.image"
          :alt="weatherData.weather_desc_en"
          :title="weatherData.weather_desc_en"
          @error="handleImageError"
          class="w-8 h-8 object-contain"
        />
      </div>

      <!-- Temp & Humidity -->
      <div class="flex items-center w-full gap-2 font-semibold text-green-800 text-xs">
        <div class="w-full">{{ weatherData.t }}°C</div>
        <div class="w-full">{{ weatherData.hu }}%</div>
      </div>

      <!-- Wind Info -->
      <div class="flex items-center justify-center gap-2 w-full text-gray-800 text-xs">
        <div class="flex items-center">
          <i
          :class="getWindIcon(weatherData.wd_to)"
          class="text-base text-green-800"
          :title="`${weatherData.wd} -> ${weatherData.wd_to}`"
          ></i>
        </div>
        <div class="font-medium w-full">{{ weatherData.ws }} km/h</div>
      </div>

      <!-- Visibility -->
      <div class="text-gray-800 w-full text-center text-xs">
        {{ formatVisibility(weatherData.vs) }}
      </div>
    </div>

    <!-- Empty -->
    <div v-else class="flex items-center justify-center h-full text-3xl text-gray-800">
      <span>--</span>
    </div>
  </div>
</template>


<script setup lang="ts">
import type { BMKGWeatherData } from '@/types/weather'
import { formatVisibility, getWindIcon } from '@/utils/dateUtils'
import type { TimeSlot } from '@/utils/timeSlots'

interface Props {
  weatherData: BMKGWeatherData | null
  loading?: boolean
  error?: string | null
  timeSlot?: TimeSlot
}

withDefaults(defineProps<Props>(), {
  loading: false,
  error: null,
})

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}
</script>
