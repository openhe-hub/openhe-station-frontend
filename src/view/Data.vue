<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-row>
          <el-col :span="11">
            <TextReport :report="report">
            </TextReport>
          </el-col>
          <el-col :span="13">
            <CalendarComponent></CalendarComponent>
          </el-col>
        </el-row>
        <el-col>
          <QuickStart
              @clickCard="onClickCard"
              :data="data"
              style="height: 31.5vh">
          </QuickStart>
        </el-col>
      </el-col>
      <el-col :span="12">
        <DataReport></DataReport>
      </el-col>
    </el-row>
    <NewNoteDialog
        :new-note-dialog-visible="newNoteDialogVisible"
        @newFileSubmit="onNewFileSubmit"
        @cancelFileDialog="onFileDialogCancel">
    </NewNoteDialog>
    <NewFolderDialog
        :new-folder-dialog-visible="newFolderDialogVisible"
        @newFolderSubmit="onNewFolderSubmit"
        @cancelFolderDialog="onFolderDialogCancel">
    </NewFolderDialog>
  </div>
</template>

<script setup>
import DataReport from "../components/index/DataReport.vue";
import TextReport from "../components/data/TextReport.vue";
import QuickStart from "../components/index/QuickStart.vue";
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import CalendarComponent from "../components/data/CalendarComponent.vue";
import NewNoteDialog from "../components/data/dialog/NewNoteDialog.vue";
import NewFolderDialog from "../components/data/dialog/NewFolderDialog.vue";

// data for quick start
const data = reactive([
  {
    title: "New Note",
    icon: "Edit",
    color: "#f56c6c",
    method: "toBlog"
  }, {
    title: "New File",
    icon: "DocumentAdd",
    color: "#e6a23c",
    method: "toResource"

  }, {
    title: "New Folder",
    icon: "FolderAdd",
    color: "#5aa4ae",
    method: "toData"
  }, {
    title: "New Project",
    icon: "CirclePlusFilled",
    color: "#626aef",
    method: "toGithub"
  }]);
let router = useRouter();
const onClickCard = idx => {
  switch (idx) {
    case 0: {
      newNoteDialogVisible.value = true;
      break;
    }
    case 1: {
      router.push({path: '/home/resource/files'});
      break;
    }
    case 2: {
      newFolderDialogVisible.value = true;
      break;
    }
    case 3: {
      router.push({path: '/home/resource/projects'});
      break;
    }
  }
}

// data for text report
const report = reactive([
  {
    name: "visitors",
    num: 107
  }, {
    name: "projects",
    num: 57
  }, {
    name: "files",
    num: 43
  }, {
    name: "blogs",
    num: 7
  }]);

// data for dialog
// 1. new note
const newNoteDialogVisible = ref(false);
const newFolderDialogVisible = ref(false);


const onNewFileSubmit = (noteInfo) => {
  newNoteDialogVisible.value = false;
}

const onNewFolderSubmit = (folderInfo) => {
  newFolderDialogVisible.value = false;
}

const onFileDialogCancel = () => {
  newNoteDialogVisible.value = false;
}

const onFolderDialogCancel = () => {
  newFolderDialogVisible.value = false;
}

</script>

<style lang="less" scoped>

</style>