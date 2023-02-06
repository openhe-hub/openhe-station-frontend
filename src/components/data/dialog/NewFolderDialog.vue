<template>
  <div id="container">
    <el-dialog v-model="visible" title="New Note">
      <el-form :model="folderInfo" label-width="120px">
        <el-form-item label="Folder name">
          <el-input v-model="folderInfo.name" autocomplete="off" placeholder="Input folder name"/>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="onCancel">Cancel</el-button>
        <el-button type="primary" @click="onConfirm">Confirm</el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>

import {reactive, ref, toRefs, watchEffect} from "vue";
import api from "../../../plugin/axios/config.js";

const emit = defineEmits(['newFolderSubmit', 'cancelFolderDialog']);

const props = defineProps({
  newFolderDialogVisible: {
    type: Boolean,
    default: false
  }
})

const {newFolderDialogVisible} = toRefs(props);
const visible = ref(newFolderDialogVisible.value);
let folderInfo = reactive({
  name: "",
});

watchEffect(() => {
  visible.value = newFolderDialogVisible.value;
})

const onConfirm = () => {
  visible.value = false;
  emit('newFolderSubmit', folderInfo);
  console.log(folderInfo.name);
  api({
    url: "/api/note/new_folder",
    method: "post",
    data: {
      "name": folderInfo.name
    }
  }).then((resp) => {
    console.log(resp);
  }).catch((err) => {
    console.log(err);
  })
}

const onCancel = () => {
  visible.value = false;
  emit('cancelFolderDialog');
}
</script>

<style scoped>

</style>