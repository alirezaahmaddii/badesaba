<script lang="ts" setup>
import { ref } from 'vue';
import TreeViewCheckbox from '@/pages/home/core/components/TreeViewCheckbox.vue';
import ShowCategory from '@/pages/home/core/components/ShowCategory.vue';

const items = [
  {
    title: 'لیست نقش ها',
    disabled: true,
    href: 'breadcrumbs_link_1',
  },
  {
    title: 'افزدودن نقش',
    disabled: false,
    href: 'breadcrumbs_link_2',
  },
];
const roleName = ref<string>('');
const description = ref<string>('');
const activeButton = ref<boolean>(false);
const searchBycategory = ref<string>('');
</script>
<template>
  <v-app-bar :elevation="0" class="bg-primary"/>
  <div class="d-flex">
    <!--  sidebar section  -->
    <v-col lg="3">
      <div class="pr-16">
        <div class="d-flex align-center">
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
          <v-breadcrumbs :items="items"/>
        </div>
        <div>
          <div>پنل 1</div>
          <div>پنل 2</div>
        </div>
      </div>

    </v-col>
    <!--  search section  -->
    <v-col lg="2">
      <div>
        <div>
          <v-text-field label="نقش مسئول" variant="solo" v-model="roleName"/>
        </div>
        <div>
          <v-card>
            <template v-slot:title>
              <v-text-field
                  prepend-inner-icon="mdi-magnify"
                  label="Append inner"
                  variant="underlined"
                  single-line
                  v-model="searchBycategory"
              ></v-text-field>
            </template>
            <div>
              <TreeViewCheckbox/>
            </div>
          </v-card>
        </div>
      </div>
    </v-col>
    <!--  submit section  -->
    <v-col lg="6">
      <div class="d-flex flex-column">
        <div class="d-flex justify-space-between">
          <div class="w-33">
            <v-text-field label="توضیحات" variant="solo" v-model="description"/>
          </div>
          <div>
            <v-switch
                v-model="activeButton"
                color="primary"
                :label="activeButton ? 'فعال' : 'غیرفعال'"
            ></v-switch>
          </div>
        </div>
        <div>
          <ShowCategory/>
        </div>
        <div class="d-flex align-center ga-2 align-self-end">
          <v-btn variant="outlined" color="primary">
            بازگشت
          </v-btn>
          <v-btn variant="flat" color="primary">
            تایید
          </v-btn>
        </div>
      </div>
    </v-col>
  </div>
</template>

