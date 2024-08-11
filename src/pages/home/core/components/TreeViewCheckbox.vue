<template>
  <treeview :config="config" :nodes="nodes"></treeview>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import treeview from "vue3-treeview";
import "vue3-treeview/dist/style.css";
import categoriesData from '../schema/categoriesTree.json';
const config = reactive({
  roots: [],
  keyboardNavigation: false,
  dragAndDrop: false,
  checkboxes: true,
  checkMode: 0,
  type: '',
  editable: false,
  disabled: false,
  padding: 25,
});

const product1 = categoriesData.filter((item) => {
  if(item.productId === '1') {
    config.roots.push(item.id);
    return item;
  }
  return 0;
});

const nodes = ref({});

const createTreeNode = (nodes) => {
  const reactiveNodes = {};

  const traverse = (node, parentId = '') => {
    const nodeId = parentId === '' ? node.id : `${parentId}${node.id}`;
    const treeNode = {
      text: node.name,
      children: node.children ? node.children.map(child => `${node.id}${child.id}`) : [],
    };

    reactiveNodes[nodeId] = treeNode;

    if (node.children) {
      node.children.forEach(child => traverse(child, nodeId));
    }
  }

  nodes.forEach(node => traverse(node));
  return reactiveNodes;
}

onMounted(() => {
  nodes.value = createTreeNode(product1);
})

</script>


<style lang="scss">
.tree-level {
  padding: 0 5px;
}
</style>

<!--
console.log(product1)
const result = product1.map((item) => {
  return {
    [item.id]: {
      ...item,
      children: item.children.map((child) => ({
        [child.id]: [child.id]
      }))
    }
  };
});

console.log(result, 're');
-->
