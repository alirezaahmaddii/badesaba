<script setup lang="ts">

import { breadcrumbs } from '../constant';
</script>

<template>
  <div class="d-flex align-center text-no-wrap">
    <v-btn
        size="x-small"
        rounded="rounded"
        elevation="0"
        border="md"
        density="default"
        icon="mdi-chevron-right"
        class="opacity-70"
        width="25"
        height="25"
    />
    <v-breadcrumbs :items="breadcrumbs"/>
  </div>
</template>

<style scoped>

</style>
