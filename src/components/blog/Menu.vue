<template>
  <div id="menu-container">
    <el-scrollbar style="height: 100%">
      <el-menu
          :default-active="activeId"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="onSelect"
      >
        <el-sub-menu v-for="(group,index) in noteConfig" :key="index" :index="`${index+1}`">
          <template #title>
            <el-icon>
              <FolderOpened v-if="isExpanded[index]"></FolderOpened>
              <Folder v-else></Folder>
            </el-icon>
            <span>{{ group.groupName }}</span>
          </template>
          <el-menu-item v-for="(passage,idx) in group.passages" :key="idx" :index="`${index+1}-${idx+1}`">
            <el-icon>
              <Document/>
            </el-icon>
            {{ passage.passageName }}
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {toRefs} from "vue";
import noteConfig from "../../plugin/note/note.config.js";

// props
const props = defineProps({
  activeId: {
    type: String,
    default: '1-1',
  },
  menu: {
    type: Array
  }
})

const {activeId} = toRefs(props);
const groupNum = noteConfig.length;

// deal with sub-menu expand/collapse
let isExpanded = [];
for (let i = 0; i < groupNum; i++) {
  isExpanded.push(false);
}

const handleOpen = (key) => {
  isExpanded[parseInt(key) - 1] = true;
}
const handleClose = (key) => {
  isExpanded[parseInt(key) - 1] = false;
}

// handle note change
const emit = defineEmits(['noteChange']);
const onSelect = (index) => {
  let indices = index.split('-');
  let path = '';
  let tag = {passageName: "", date: "2022-12-01", tags: ['Vue', 'Vite']};
  for (let i in noteConfig) {
    if (parseInt(i) + 1 === parseInt(indices[0])) {
      path += noteConfig[i].path
      for (let j = 0; j < noteConfig[i].passages.length; j++) {
        if (j + 1 === parseInt(indices[1])) {
          path += noteConfig[i].passages[j].path;
          tag.passageName = noteConfig[i].passages[j].passageName;
          tag.date = noteConfig[i].passages[j].date;
          tag.tags = noteConfig[i].passages[j].tags;
          break;
        }
      }
      break;
    }
  }
  emit('noteChange', path, tag);
}
</script>

<style scoped>
div#menu-container {
  margin-left: 10px;
  margin-top: 2vh;
  box-shadow: -3px -1px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 100%;
  height: 62.3vh;
}
</style>