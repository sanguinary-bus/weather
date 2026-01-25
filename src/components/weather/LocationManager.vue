<template>
  <Dialog
    v-model:visible="showManager"
    header="Manage Locations"
    modal
    class="max-w-150 w-full"
  >
    <div class="flex flex-col gap-6">
      <!-- Info -->
      <div class="mb-2">
        Enable up to {{ maxLocations }} locations by toggling the switches below.
      </div>

      <!-- Locations List -->
      <div class="flex flex-col gap-3 max-h-96 overflow-y-auto pr-2">
        <div
          v-for="location in allLocations"
          :key="location.id"
          :class="[
            'flex items-center justify-between p-4 rounded-lg border transition-all duration-300',
            isLocationEnabled(location.id)
              ? 'bg-green-100 border-green-100 hover:border-green-300'
              : 'bg-neutral-100 border-neutral-200 hover:border-neutral-300',
            'sm:flex-col sm:text-center sm:gap-4',
          ]"
        >
          <!-- Location Info -->
          <div class="text-left sm:text-center">
            <h4 class="m-0 mb-1 text-base font-semibold text-green-800">
              {{ location.desa }}
            </h4>
            <p class="m-0 mb-1 text-sm opacity-80">
              {{ location.kecamatan }}
            </p>
            <p class="m-0 mb-1 text-sm opacity-80">
              {{ location.kotkab }}
            </p>
            <p class="m-0 mb-1 text-sm opacity-80">
              {{ location.provinsi }}
            </p>
            <small class="text-xs opacity-60">
              {{ location.lat }}, {{ location.lon }}
            </small>
          </div>

          <!-- Toggle -->
          <div class="flex flex-col items-center gap-2 sm:flex-row">
            <ToggleButton
              v-model="location.enabled"
              @change="toggleLocation(location.id)"
              :disabled="
                !isLocationEnabled(location.id) && enabledCount >= maxLocations
              "
            />
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div
        class="flex justify-between items-center pt-4 border-t border-neutral-200 sm:flex-col sm:gap-3"
      >
        <Button
          label="Reset to Defaults"
          @click="resetToDefaults"
          severity="secondary"
          outlined
          class="sm:order-1"
        />
        <Button
          label="Apply Changes"
          @click="applyChanges"
          :disabled="hasNoChanges"
          class="sm:order-2"
        />
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useLocations } from '@/composables/useLocations'

interface Props {
  maxLocations?: number
}

withDefaults(defineProps<Props>(), {
  maxLocations: 10,
})

const locations = useLocations()
defineEmits<{
  'update:showManager': [value: boolean]
}>()

const showManager = defineModel<boolean>('visible', { default: false })

// Computed properties
const { allLocations, enabledLocationIds, isLocationEnabled, toggleLocation } =
  locations
const enabledCount = computed(() => enabledLocationIds.value.length)

// Check if there are no changes to apply
const hasNoChanges = computed(() => {
  // For now, always allow apply
  // In future, we could track if locations have changed
  return false
})

// Reset to defaults
const resetToDefaults = () => {
  // Reset to first 3 locations as enabled
  allLocations.value.forEach((location, index) => {
    if (index < 3) {
      if (!isLocationEnabled(location.id)) {
        toggleLocation(location.id)
      }
    } else {
      if (isLocationEnabled(location.id)) {
        toggleLocation(location.id)
      }
    }
  })
}

// Apply changes
const applyChanges = () => {
  showManager.value = false
}
</script>
