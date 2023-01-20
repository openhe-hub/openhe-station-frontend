<template>
  <div id="nav-container">
    <el-menu
        :default-active="`${activeId}`"
        class="el-menu-vertical-demo"
        style="height: 98%"
        @select="onSelect"
    >
      <el-menu-item v-for="(route,idx) in routeTable" :key="idx" :index="`${idx+1}`" :route="route">
        <el-icon size="100">
          <component :is="navIcon[idx]"></component>
        </el-icon>
        <div class="nav-text">
          {{ routeName[idx] }}
        </div>
      </el-menu-item>
    </el-menu>
    <div id="copyright-container">© 2023 openhe</div>
  </div>
</template>

<script setup>
import {toRefs, watch} from 'vue'
import {useRouter} from "vue-router";

// route data
const routeTable = ['/home/index', '/home/blog', '/home/resource', '/home/data', '/home/settings', '/home/chat']
const routeName = ['Home', 'Blog', 'Resource', 'Data', 'Settings', 'Chat'];
const navIcon = ['House', 'EditPen', 'Wallet', 'DataAnalysis', 'Setting', 'ChatSquare'];

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
const currRouter = useRouter();
watch(activeId, (newId) => {
  currRouter.push(routeTable[parseInt(newId) - 1]);
})

</script>

<style scoped>
div#nav-container {
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 5px;
  margin: 0 10px 0 10px;
  padding: 0 0 15px 0;
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
  color: #898b8c;
  font-size: 13px;
  text-align: center;
  transition: color 0.5s;
}

div#copyright-container:hover{
  color: #212020;
}
</style>