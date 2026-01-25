<template>
  <div class="w-full mb-4">
    <!-- Day Headers Row -->
    <div class="grid grid-cols-3 mb-2 gap-2">
      <div
      v-for="(day, index) in dayLabels"
      :key="index"
      class="bg-green-100 text-green-900 rounded-lg p-2 text-sm font-semibold text-center shadow-md"
      >
        <span class="block">{{ day }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const dayLabels = ['Today', 'Tomorrow', 'D after T']
</script>

