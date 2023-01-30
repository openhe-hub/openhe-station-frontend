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
        <el-sub-menu v-for="(group,index) in structure" :key="index" :index="`${index+1}`">
          <template #title>
            <el-icon>
              <FolderOpened v-if="isExpanded[index]"></FolderOpened>
              <Folder v-else></Folder>
            </el-icon>
            <span>{{ group.name }}</span>
          </template>
          <el-menu-item v-for="(note,idx) in group.notes" :key="idx" :index="`${index+1}-${idx+1}`">
            <el-icon>
              <Document/>
            </el-icon>
            {{ note.name }}
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {onMounted, reactive, toRefs} from "vue";
import api from "../../plugin/axios/config.js";

// props
const props = defineProps({
  activeId: {
    type: String,
    default: '1-1',
  }
})

// load data
let structure = reactive([]);

onMounted(() => {
  api({
    url: '/api/note/structure',
    method: 'get',
  }).then(resp => {
    resp.data.forEach(i => structure.push(i));
  }).catch(err => {
    console.log(err);
  })
})



const {activeId} = toRefs(props);
const groupNum = structure.length;

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
  let params = [];
  indices.forEach(i => params.push(parseInt(i) - 1));
  console.log(params);
  emit('noteChange', params);
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