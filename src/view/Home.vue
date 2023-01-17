<template>
  <div id="container">
    <el-row :gutter="10">
      <el-col :span="4" class="header-col">
        <div id="title-container">
          Openhe Station
        </div>
      </el-col>
      <el-col :span="10">
        <Header></Header>
      </el-col>
    </el-row>
<!--    <el-divider></el-divider>-->
    <el-row :gutter="20" class="content-row">
      <el-col :span="4" class="nav-col">
        <NavBar></NavBar>
      </el-col>
      <el-col :span="20" class="content-col">main content</el-col>
    </el-row>
  </div>
</template>

<script setup>
import Header from "../components/header/Header.vue";
import NavBar from "../components/nav/NavBar.vue";
</script>

<style scoped>
div#container {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}

div#title-container {
  text-align: center;
  font-family: "Arial", "Microsoft YaHei", sans-serif;
  font-size: 15px;
  font-weight: 350;
  height: 100%;
  width: 100%;
  border: 0px solid black;
  border-radius: 5px;
  margin: 10px 0 0 10px;
  padding: 15px 0px 15px 0px;
  box-shadow: 1px 1px 5px #000;
}

.header-col {
  height: 100%;
}

.content-row, .content-col,.nav-col {
  height: 100%;
  text-align: center;
}
</style>