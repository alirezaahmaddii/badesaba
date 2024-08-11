<template>
  <treeview @nodeChecked="$emit('selectCategory', nodes)" @nodeUnchecked="$emit('unselectCategory', nodes)"
            :config="config" :nodes="nodes"/>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import treeview from "vue3-treeview";
import "vue3-treeview/dist/style.css";
import {string} from "yup";

const props = defineProps({
  roots: [],
  productList: [],
  searchFilter: {
    type: string,
    required: true,
    default: () => ''
  },
});

const config = reactive({
  roots: props.roots,
  keyboardNavigation: false,
  dragAndDrop: false,
  checkboxes: true,
  checkMode: 0,
  type: '',
  editable: false,
  disabled: false,
  padding: 25,
});

const nodes = ref({});

const createTreeNode = (nodes) => {
  const reactiveNodes = {};
  const createNode = (node, parentId = '') => {
    const nodeId = parentId === '' ? node.id : `${parentId}${node.id}`;
    const treeNode = {
      text: node.name,
      children: node.children ? node.children.map(child => `${parentId}${node.id}${child.id}`) : [],
      id: node.id,
      originalId: node.id
    };

    reactiveNodes[nodeId] = treeNode;

    if (node.children) {
      node.children.forEach(child => createNode(child, nodeId));
    }
  }

  nodes.forEach(node => createNode(node));
  return reactiveNodes;
}

onMounted(() => {
  nodes.value = createTreeNode(props.productList);
})

</script>


<style lang="scss">
.tree-level {
  padding: 0 5px;
}

.icon-wrapper {
  order: 1;
  margin-inline-start: auto;
  cursor: pointer;
}
</style>
