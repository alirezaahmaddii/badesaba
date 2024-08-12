<script setup>
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  snackBar: {
    type: Boolean,
    required: true
  },
  payloadData: {
    type: Object,
    required: true
  }
});

const localSnackBar = ref(props.snackBar);

watch(() => props.snackBar, (newVal) => {
  localSnackBar.value = newVal;
});
</script>

<template>
  <v-snackbar v-model="localSnackBar">
    برای دیدن بهتر payload میتوانید کنسول مرورگر خود را نیز باز کنید
    <br>
    Role Name: {{ payloadData.name }}
    Describe: {{ payloadData.description }}
    Active: {{ payloadData.active }}
    Action Id: {{ payloadData.actionIds }}
  </v-snackbar>
</template>
