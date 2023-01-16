<template>
  <div id="container">
    <div id="center" class="blur-container">
      <p id="welcome_title">Openhe's Station</p>
      <el-button type="primary">
        Enter
        <el-icon class="el-icon--right"><DArrowRight /></el-icon>
      </el-button>
      <el-button type="success" >
        Search
        <el-icon class="el-icon--right"><Search /></el-icon>
      </el-button>
      <p>[Sentence]</p>
    </div>
  </div>
</template>

<script setup>
import {DArrowRight, Search} from "@element-plus/icons-vue";
</script>

<style scoped>
div#container {
  width: 100%;
  height: 100%;
  position: fixed;
  background: url("../assets/img/welcome_background.jpg") no-repeat center;
  background-size: cover;
  margin: 0;
}

div#center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  text-align: center;
  vertical-align: middle;
  padding: 5% 2%;
}

#welcome_title{
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-size: 20px;
}

div.blur-container{
  background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border: 0px solid black;
  border-radius: 10px;
  box-shadow:inset 0 0 6px rgba(255, 255, 255, 0.2);
}
</style>