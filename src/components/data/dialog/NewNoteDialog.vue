<template>
  <div id="container">
    <el-dialog v-model="visible" title="New Note">
      <el-form :model="noteInfo" label-width="120px">
        <el-form-item label="Filename">
          <el-input v-model="noteInfo.name" autocomplete="off" placeholder="Input filename"/>
        </el-form-item>
        <el-form-item label="Folder">
          <el-select v-model="noteInfo.folder" placeholder="Select a folder">
            <el-option label="Web" value="web"/>
            <el-option label="Java" value="java"/>
            <el-option label="Linux" value="linux"/>
          </el-select>
        </el-form-item>
        <el-form-item label="Date">
          <el-date-picker
              v-model="noteInfo.date"
              type="date"
              placeholder="pick a date"
              style="width: 100%">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Tags">
          <el-input v-model="noteInfo.tag" placeholder="Input tags, use comma to separate" autocomplete="off"/>
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

const emit = defineEmits(['newFileSubmit','cancel']);

const props = defineProps({
  newNoteDialogVisible: {
    type: Boolean,
    default: false
  }
})

const {newNoteDialogVisible} = toRefs(props);
const visible = ref(newNoteDialogVisible.value);
let noteInfo = reactive({
  name: "",
  date: "",
  tag: [],
  folder: ""
});

watchEffect(() => {
  visible.value = newNoteDialogVisible.value;
})

const onConfirm = () => {
  visible.value = false;
  emit('newFileSubmit', noteInfo);
}

const onCancel=()=>{
  visible.value = false;
  emit('cancel');
}
</script>

<style scoped>

</style>