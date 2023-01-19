<template>
  <div id="nav-container">
    <el-menu
        :default-active="`${activeId}`"
        class="el-menu-vertical-demo"
        style="height: 98%"
        @select="onSelect"
    >
      <el-menu-item index="1" route="/home/index">
        <el-icon size="100">
          <House/>
        </el-icon>
        <div class="nav-text">
          Home
        </div>
      </el-menu-item>

      <el-menu-item index="2" route="/home/blog">
        <el-icon size="100">
          <EditPen/>
        </el-icon>
        <div class="nav-text">
          Blog
        </div>
      </el-menu-item>

      <el-menu-item index="3" route="/home/resource">
        <el-icon size="100">
          <Wallet/>
        </el-icon>
        <div class="nav-text">
          Resource
        </div>
      </el-menu-item>

      <el-menu-item index="4" route="/home/data">
        <el-icon size="100">
          <DataAnalysis/>
        </el-icon>
        <div class="nav-text">
          Data
        </div>
      </el-menu-item>

      <el-menu-item index="5" route="/home/settings">
        <el-icon size="100">
          <Setting/>
        </el-icon>
        <div class="nav-text">
          Settings
        </div>
      </el-menu-item>

      <el-menu-item index="6" route="/home/chat">
        <el-icon size="100">
          <ChatSquare/>
        </el-icon>
        <div class="nav-text">
          Chat
        </div>
      </el-menu-item>
    </el-menu>
    <div id="copyright-container">© 2023 openhe</div>
  </div>
</template>

<script setup>
import {ref, toRefs, watch} from 'vue'
import router from "../../plugin/router/config.js";
import {useRouter} from "vue-router";

// props: activeId
const props = defineProps({
  activeId: {
    type: String
  }
});
const {activeId} = toRefs(props);

// select
const emit = defineEmits(['updateNavId']);
const onSelect = (index) => {
  emit('updateNavId', parseInt(index));
}

// watch
const routeTable = ['', '/home/index', '/home/blog', '/home/resource', '/home/data', '/home/settings', '/home/chat']
const currRouter = useRouter();
watch(activeId, (newId, oldId) => {
  currRouter.push(routeTable[parseInt(newId)]);
})

</script>

<style scoped>
div#nav-container {
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 5px;
  margin: 0px 10px 0px 10px;
  padding: 0px 0px 15px 0px;
  box-shadow: -3px -1px 10px rgba(0, 0, 0, 0.25);
  height: 77vh;
  width: 100%;
}

div.nav-text {
  font-family: "Times New Roman", sans-serif;
  font-size: 16px;
  margin-left: 15px;
}

.router-link-active {
  text-decoration: none;
  color: #66b1ff;
}

/deep/ .is-active {
  background-color: rgba(178, 199, 227, 0.4);
}

a {
  text-decoration: none;
  color: black;
}

div#copyright-container {
  color: #717374;
  font-size: 13px;
}
</style>