<script setup lang="ts">
import { ref } from 'vue';

const radioLevel = ref<number>(0)
const actionList = ref<string[]>([])

const props = defineProps({
  selectCategory: {
    type: Object,
    required: true,
    default: () => ({ title: '', actionListFilter: [] })
  },
});

const emit = defineEmits(['update-action-list']);

const addActionList = () => {
  actionList.value = [];
  Object.keys(props.selectCategory?.actionListFilter).map((item) => {
    const targetLevel = props.selectCategory?.actionListFilter[item].level;
    switch (radioLevel.value) {
      case 100:
        actionList.value.push(props.selectCategory?.actionListFilter[item]._id);
        return 100;
      case 300:
        if (targetLevel === 300) {
          actionList.value.push(props.selectCategory?.actionListFilter[item]._id);
          return 300;
        }
        break;
      case 200:
        if (targetLevel === 300 || targetLevel === 200) {
          actionList.value.push(props.selectCategory?.actionListFilter[item]._id);
          return 200;
        }
        break;
      default:
        break;
    }
  });
  emit('update-action-list', actionList.value);
}
</script>

<template>
  <div class="d-flex align-center justify-space-between">
    <div class="text-no-wrap pl-4 d-flex align-item-center">
      {{ props.selectCategory.title }}
      <v-icon>mdi-chevron-down</v-icon>
    </div>
    <v-divider inset></v-divider>

    <div class="w-100">

      <v-radio-group inline @change="addActionList" v-model="radioLevel">
        <v-radio color="primary" label="دسترسی انتشار" :value="100"></v-radio>
        <v-radio color="primary" label="دسترسی ویرایش" :value="200"></v-radio>
        <v-radio color="primary" label="دسترسی مشاهده" :value="300"></v-radio>
      </v-radio-group>
    </div>
  </div>
  <div>
    <v-list lines="one" class="d-flex ga-4 flex-wrap">
      <v-list-item class="opacity-50 list-item" v-for="item in props.selectCategory.actionListFilter" :key="item._id">
        <div>
          <v-icon>mdi-circle-medium</v-icon>
          {{ item.name }}
        </div>
      </v-list-item>
    </v-list>
  </div>
</template>

<style scoped>
.list-item {
  flex: 0 0 25%;
}
</style>
