<template>
  <div id="menu-container">
    <el-scrollbar style="height: 100%">
      <el-menu
          :default-active="activeId"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-sub-menu v-for="(subMenu,index) in menu" :index="`${index+1}`">
          <template #title>
            <el-icon>
              <FolderOpened v-if="isExpanded[index]"></FolderOpened>
              <Folder v-else></Folder>
            </el-icon>
            <span>{{subMenu.groupName}}</span>
          </template>
          <el-menu-item v-for="(passage,idx) in subMenu.passages" :index="`${index+1}-${idx+1}`">
            <el-icon>
              <Document/>
            </el-icon>
            {{passage.passageName}}
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {toRefs} from "vue";

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
const menu = props.menu;
const groupNum = menu.length;

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