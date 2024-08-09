<script setup>
import logoIcon from '../../../../public/badesaba_icon.svg';
</script>

<template>
  <div class="w-100 py-2 px-4 d-flex flex-column justify-space-between text-center gap-200px">
    <div>
      <div>
        <v-img width="100" height="100" class="mx-auto" :src="logoIcon" />
      </div>
      <div>
        <div class="text-h5">
            پیش خوان مدیریت کاربران
        </div>
        <div class="font-weight-thin text-h5 pt-8">
            نرم افزار بادصبا
        </div>
      </div>
    </div>
    <div class="font-weight-thin text-body-2">
      کلیه حقوق این وبسایت متعلق به
      <span class="font-weight-bold">
      شرکت پیشگامان موج تلفن همراه
      </span>
      است.
    </div>
  </div>
</template>

<style scoped>
.gap-200px {
  gap: 200px;
}
</style>
