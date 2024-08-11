<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import loginMock from '../mock/loginMock.json'

type loginInformationUser = {
  username: string,
  password: string,
}
const router = useRouter();

const snackBar = ref<boolean>(false)
const snackBarMessage = ref<string>('مشکلی رخ داده است')
const rulesForInputs = [
  (v) => !!v || 'لطفا فیلد زیر را پر نمایید',
];

const validationFields = reactive<loginInformationUser>({
  username: '',
  password: ''
})

const submitLoginForm = () => {
  if (loginMock.username === validationFields.username && loginMock.userPassword === validationFields.password) {
    localStorage.setItem('userToken', JSON.stringify(loginMock))
    router.push('/home');
  }
  snackBarMessage.value = 'نام کاربری یا رمز عبور اشتباه است';
  snackBar.value = true;
}

const isButtonDisabled = computed(() => {
  return !validationFields.username || !validationFields.password;
});

</script>

<template>
  <div class="w-50 py-md-2 px-4 d-flex flex-column ga-8 w-100 h-100 justify-space-between">
    <div class="pt-6">
      <div class="d-flex align-center text-subtitle-1 flex-1-0 pb-3">
        <div>
          <v-icon left>mdi-login</v-icon>
        </div>
        ورود
      </div>
      <div class="flex-1-0">
        <v-form class="d-flex flex-column ga-8">
          <v-text-field
              v-model="validationFields.username"
              label="نام کاربری"
              variant="outlined"
              :rules="rulesForInputs"
              required
          ></v-text-field>
          <v-text-field
              v-model="validationFields.password"
              label="رمز عبور"
              variant="outlined"
              type="password"
              :rules="rulesForInputs"
              required
          ></v-text-field>
        </v-form>
      </div>
    </div>
    <div>
      <v-btn width="100%" variant="tonal" size="x-large" @click="submitLoginForm" :disabled="isButtonDisabled">
        ورود
      </v-btn>
    </div>
  </div>
  <v-snackbar
      v-model="snackBar"
  >
    {{ snackBarMessage }}

    <template v-slot:action="{ attrs }">
      <v-btn
          color="pink"
          v-bind="attrs"
          @click="snackBar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>

</style>
