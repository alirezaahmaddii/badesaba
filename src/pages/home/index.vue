<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import TreeViewCheckbox from '@/pages/home/core/components/TreeViewCheckbox.vue';
import ShowCategory from '@/pages/home/core/components/ShowCategory.vue';
import categoriesData from '@/pages/home/core/schema/categoriesTree.json';
import actionList from './core/schema/actions.json';
import { useRouter } from 'vue-router';
import BreadcrumbsLink from '@/pages/home/core/components/BreadcrumbsLink.vue';
import HeaderPage from '@/pages/home/core/components/HeaderPage.vue';
import {
  actionListItemType,
  categoryDataType,
  nodeItemType,
  payloadDataType,
  rootsTreeType
} from '@/pages/home/core/models';
import SnackbarComponent from '@/pages/home/core/components/SnackbarComponent.vue';

const router = useRouter();

const roleName = ref<string>('');
const description = ref<string>('');
const statusActiveUser = ref<boolean>(false);
const activeAction = ref<string[]>([]);
const selectProduct = ref('product1');
const roots = ref<rootsTreeType>({
  product1: [],
  product2: []
});
const searchBycategory = ref<string>('');
const snackBar = ref<boolean>(false)
const products: { [keys: string]: object[] } = {
  product1: [],
  product2: [],
}
const productList = computed(() => products[selectProduct.value]);
const rootsList = computed(() => roots.value[selectProduct.value]);

const actionListFilterByCategory = ref<Record<string, actionListItemType>>({});
const actionListSelectCategory = (nodes: Record<string, nodeItemType>) => {
  Object.keys(nodes).map((key) => {
    if (nodes[key].state.checked) {
      if (!actionListFilterByCategory.value[nodes[key].originalId]) {
        actionList.map((item) => {
          if (item.category === nodes[key].originalId) {
            if (!actionListFilterByCategory.value[nodes[key].originalId]) {
              actionListFilterByCategory.value[nodes[key].originalId] = {
                actionListFilter: [],
                title: nodes[key].text,
                id: nodes[key].originalId
              };
            }
            actionListFilterByCategory.value[nodes[key].originalId].actionListFilter.push(item);
          }
        });
      }
    }
  });
};
const actionListUnselectCategory = (nodes: Record<string, nodeItemType>) => {
  Object.keys(nodes).map((key) => {
    if (actionListFilterByCategory.value[nodes[key].originalId]?.id === nodes[key].originalId && !nodes[key].state.checked) {
      delete actionListFilterByCategory.value[nodes[key].originalId];
    }
  })
};
const updateActionList = (newActionList: string[]) => {
  newActionList.map((item) => {
    console.log(item);
  })
  const uniqueItems = newActionList.filter(item => !activeAction.value.includes(item));
  activeAction.value = [...activeAction.value, ...uniqueItems];
};
const payloadData = reactive<payloadDataType>({
  name: '',
  description: '',
  active: false,
  actionIds: []
})
const sendInformation = () => {
  snackBar.value = true;
  payloadData.name = roleName.value;
  payloadData.description = description.value;
  payloadData.active = statusActiveUser.value;
  payloadData.actionIds = activeAction.value;
  setTimeout(() => {
    snackBar.value = false;
  }, 2000)
  console.log(payloadData);
}
const logoutAction = () => {
  localStorage.removeItem('userToken');
  router.push('/login');
}
const categoryList:categoryDataType[] = categoriesData;
// initial roots for tree nodes
categoryList.filter((item) => {
  if (item.productId === '1') {
    roots.value.product1.push(item.id as string)
    return products.product1.push(item);
  } else if (item.productId === '2') {
    roots.value.product2.push(item.id as string)
    return products.product2.push(item);
  }
  return 0;
});

</script>
<template>
  <HeaderPage @exit-action="logoutAction" />
  <div class="d-flex">
    <!--  sidebar section  -->
    <v-col lg="2" md="3">
      <div class="pr-16">
      <BreadcrumbsLink />
        <div class="d-flex flex-column ga-4">
          <div
              :class="`sidebar-item px-3 py-4 bg-purple-lighten-5 opacity-50 text-primary cursor-pointer ${selectProduct === 'product1' && 'opacity-100'}`"
              @click="() => {selectProduct = 'product1'}">
            پنل 1
          </div>
          <div
              :class="`sidebar-item px-3 py-4 bg-purple-lighten-5 opacity-50 text-primary cursor-pointer ${selectProduct === 'product2' && 'opacity-100'}`"
              @click="() => {selectProduct = 'product2'}">پنل 2
          </div>
        </div>
      </div>

    </v-col>
    <!--  search section  -->
    <v-col lg="2" md="3" class="pr-10">
      <div>
        <div>
          <v-text-field label="نقش مسئول" variant="solo" single-line v-model="roleName"/>
        </div>
        <div>
          <v-card>
            <template v-slot:title>
              <v-text-field
                  prepend-inner-icon="mdi-magnify"
                  label="جستجوی عنوان دسترسی"
                  variant="underlined"
                  single-line
                  v-model="searchBycategory"
              ></v-text-field>
            </template>
            <div>
              <KeepAlive>
                <TreeViewCheckbox
                    :key="selectProduct"
                    :product-list="productList"
                    :roots="rootsList"
                    :search-filter="searchBycategory"
                    @selectCategory="actionListSelectCategory"
                    @unselectCategory="actionListUnselectCategory"
                />
              </KeepAlive>
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
            <v-text-field label="توضیحات" variant="solo" single-line v-model="description"/>
          </div>
          <div>
            <v-switch
                v-model="statusActiveUser"
                color="primary"
                :label="statusActiveUser ? 'فعال' : 'غیرفعال'"
            ></v-switch>
          </div>
        </div>
        <div v-for="item in actionListFilterByCategory" :key="item.id">
          <ShowCategory :select-category="item" @updateActionList="updateActionList"/>
        </div>
        <div class="d-flex align-center ga-2 align-self-end">
          <v-btn variant="outlined" color="primary">
            بازگشت
          </v-btn>
          <v-btn variant="flat" color="primary" @click="sendInformation">
            تایید
          </v-btn>
        </div>
      </div>
    </v-col>
  </div>
  <SnackbarComponent :payloadData="payloadData" :snackBar="snackBar"  />
</template>

<style scoped lang="scss">
.sidebar-item {
  clip-path: polygon(9% 1%, 100% 0, 100% 50%, 100% 100%, 8% 100%, 0% 50%);
}
</style>
