<template>
  <div id="container">
    <el-dialog v-model="visible" title="New Note">
      <el-form :model="noteInfo" label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="noteInfo.name" autocomplete="off" placeholder="Input filename"/>
        </el-form-item>
        <el-form-item label="Filename(*.md)">
          <el-input v-model="noteInfo.path" autocomplete="off" placeholder="Input filename"/>
        </el-form-item>
        <el-form-item label="Folder">
          <el-select v-model="noteInfo.parentPath" placeholder="Select a folder">
            <el-option v-for="path in paths" key="path" :label="path" :value="path"/>
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
          <el-input v-model="noteInfo.tags" placeholder="Input tags, use comma to separate" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="File">
          <el-upload
              ref="fileRef"
              :auto-upload="false"
              :http-request="uploadNewFile">
            <el-button type="primary">
              Upload markdown file
            </el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button type="danger" @click="onCancel">Cancel</el-button>
        <el-button type="success" @click="onConfirm">OK</el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref, toRefs, watchEffect} from "vue";
import api from "../../../plugin/axios/config.js";
import {ElMessage} from 'element-plus'

const emit = defineEmits(['newFileSubmit', 'cancelFileDialog']);

// data
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
  parentPath: "",
  path: "",
  date: "",
  tags: ""
});
let fileRef = ref();

// query parent paths
let paths = reactive([]);
const queryPath = () => {
  api({
    url: "/api/note/folder",
    method: "get"
  }).then((resp) => {
    paths.splice(0, paths.length);
    resp.data.forEach(i => paths.push(i));
  }).catch((err) => {
    console.log(err);
  })
}
onMounted(() => {
  queryPath();
})


// watch visible
watchEffect(() => {
  visible.value = newNoteDialogVisible.value;
})

// confirm / cancel
const onConfirm = () => {
  visible.value = false;
  emit('newFileSubmit', noteInfo);
  fileRef.value.submit();
}

const onCancel = () => {
  visible.value = false;
  emit('cancelFileDialog');
}

// upload new file
const uploadNewFile = (params) => {
  let formData = new FormData();
  formData.append("name", noteInfo.name);
  formData.append("tags", noteInfo.tags);
  formData.append("path", noteInfo.path);
  formData.append("parentPath", noteInfo.parentPath);
  formData.append("date", noteInfo.date);
  formData.append("file", params.file);
  api({
    url: "/api/note/new_note",
    method: "post",
    data: formData
  }).then((resp) => {
    if (resp.data.success) {
      ElMessage({
        showClose: true,
        message: 'Upload new note successfully!',
        type: 'success',
      })
    } else {
      ElMessage({
        showClose: true,
        message: 'Oops, failed to upload new note!',
        type: 'error',
      })
    }
  }).catch((err) => {
    console.log(err);
  })
}
</script>

<style scoped>

</style>