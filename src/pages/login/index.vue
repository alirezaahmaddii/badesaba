<script lang="ts" setup>
import LeftSectionLogin from '@/pages/login/core/components/LeftSectionLogin.vue';
import RightSectionLogin from '@/pages/login/core/components/RightSectionLogin.vue';
</script>
<template>
  <v-col md="9" class="mx-auto d-flex align-center w-100 h-100">
    <v-col md="8" sm="12" class="mx-auto">
      <div class="d-flex flex-column-reverse flex-sm-row justify-center mx-auto elevation-15 rounded-lg">
        <div class="w-100 w-sm-50 flex-1-0 pb-5">
          <RightSectionLogin/>
        </div>
        <div class="w-100 w-sm-50 h-100 flex-1-0 bg-primary rounded-be-lg rounded-e-lg py-10">
          <LeftSectionLogin/>
        </div>
      </div>
    </v-col>
  </v-col>
</template>
