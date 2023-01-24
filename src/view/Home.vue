<template>
  <div id="container">
    <el-row :gutter="10" class="header-row">
      <el-col :span="4" class="header-col">
        <Title></Title>
      </el-col>
      <el-col :span="20" class="header-col">
        <Header @routeChange="onNavIdChange"></Header>
      </el-col>
    </el-row>
    <!--    <el-divider></el-divider>-->
    <el-row :gutter="20" class="content-row">
      <el-col :span="4" class="nav-col">
        <NavBar :activeId="navIdStr" @updateNavId="onNavIdChange"></NavBar>
      </el-col>
      <el-col :span="20" class="content-col">
        <router-view @updateNavId="onNavIdChange"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import Header from "../components/header/Header.vue";
import Title from "../components/header/Title.vue";
import NavBar from "../components/nav/NavBar.vue";
import {computed, inject, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

let route = useRoute();
const routeTable = ['/home/index', '/home/blog', '/home/resource', '/home/data', '/home/settings', '/home/chat'];
const navId = ref(1);
routeTable.forEach((route, idx) => {
  if (route.split('/')[2] === useRoute().path.split('/')[2]) {
    navId.value = idx + 1;
  }
})

const navIdStr = computed(() => {
  return `${navId.value}`;
});

const onNavIdChange = newId => {
  navId.value = newId;
  route = useRoute(); //update route
}


</script>

<style scoped>
div#container {
  height: 100%;
  width: 100%;
}

.header-col {
  height: 100%;
}

.header-row {
  height: 18vh;
}

.content-row {
  height: 82vh;
  padding-bottom: 5px;
}
</style>