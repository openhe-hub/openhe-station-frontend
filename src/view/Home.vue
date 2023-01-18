<template>
  <div id="container">
    <el-row :gutter="10" class="header-row">
      <el-col :span="4" class="header-col">
        <Title></Title>
      </el-col>
      <el-col :span="20" class="header-col">
        <Header></Header>
      </el-col>
    </el-row>
    <!--    <el-divider></el-divider>-->
    <el-row :gutter="20" class="content-row">
      <el-col :span="4" class="nav-col">
        <NavBar></NavBar>
      </el-col>
      <el-col :span="20" class="content-col">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import Header from "../components/header/Header.vue";
import Title from "../components/header/Title.vue";
import NavBar from "../components/nav/NavBar.vue";

</script>

<style scoped>
div#container {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}

.header-col {
  height: 100%;
}

.header-row{
  height: 18vh;
}

.content-row{
  height: 82vh;
  text-align: center;
  padding-bottom: 5px;
}
</style>