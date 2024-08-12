<script setup lang="ts">
defineEmits(['exitAction'])
</script>

<template>
  <v-app-bar :elevation="0" class="bg-primary">
    <button @click="$emit('exitAction')">
      خروج
    </button>
  </v-app-bar>
</template>
