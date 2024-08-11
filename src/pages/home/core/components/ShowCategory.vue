<script setup lang="ts">
const items = [
  {
    title: 'Item #1',
    value: 1,
  },
  {
    title: 'Item #2',
    value: 2,
  },
  {
    title: 'Item #3',
    value: 3,
  },
];
</script>

<template>
  <div class="d-flex align-center justify-space-between">
    <div class="text-no-wrap pl-4 d-flex align-item-center">
      عنوان دسترسی
      <v-icon>mdi-chevron-down</v-icon>
    </div>
    <v-divider inset></v-divider>

    <div class="w-100">
      <v-radio-group inline>
        <v-radio label="دسترسی انتشار" value="one"></v-radio>
        <v-radio label="دسترسی ویرایش" value="two"></v-radio>
        <v-radio label="دسترسی مشاهده" value="three"></v-radio>
      </v-radio-group>
    </div>
  </div>
  <div>
    <v-list lines="one" class="d-flex ga-4 flex-wrap">
      <v-list-item class="opacity-50 list-item" v-for="item in 5">
        <v-icon>mdi-circle-medium</v-icon>
        دسترسی 4
      </v-list-item>
    </v-list>
  </div>
</template>

<style scoped>
.list-item {
  flex: 0 0 25%
}
</style>
