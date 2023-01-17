<template>
  <div id="container">
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        style="height: 82vh"
    >
      <el-menu-item index="1">
        <el-icon size="100">
          <House/>
        </el-icon>
        <router-link to="/home/index">
          <div class="nav-text">
            Home
          </div>
        </router-link>
      </el-menu-item>

      <el-menu-item index="2">
        <el-icon size="100">
          <EditPen/>
        </el-icon>
        <router-link to="/home/blog">
          <div class="nav-text">
            Blog
          </div>
        </router-link>
      </el-menu-item>

      <el-menu-item index="3">
        <el-icon size="100">
          <Wallet/>
        </el-icon>
        <router-link to="/home/resource">
          <div class="nav-text">
            Resource
          </div>
        </router-link>
      </el-menu-item>

      <el-menu-item index="4">
        <el-icon size="100">
          <Document/>
        </el-icon>
        <router-link to="/home/data">
          <div class="nav-text">
            Data
          </div>
        </router-link>
      </el-menu-item>

      <el-menu-item index="5">
        <el-icon size="100">
          <Setting/>
        </el-icon>
        <router-link to="/home/settings">
          <div class="nav-text">
            Settings
          </div>
        </router-link>
      </el-menu-item>

      <el-menu-item index="6">
        <el-icon size="100">
          <ChatSquare/>
        </el-icon>
        <router-link to="/home/chat">
          <div class="nav-text">
            Chat
          </div>
        </router-link>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
import {ref} from 'vue'

</script>

<style scoped>
div#container {
  overflow-x: hidden;
  overflow-y: hidden;
  border: 0px solid black;
  border-radius: 5px;
  margin: 10px 10px 10px 10px;
  padding: 0px 10px 15px 0px;
  box-shadow: 1px 1px 5px #000;
}

div.nav-text {
  font-family: Consolas, sans-serif;
  font-size: 20px;
  margin-left: 15px;
}

.router-link-active {
  text-decoration: none;
  color:  #66b1ff;
}

a{
  text-decoration: none;
  color: black;
}
</style>