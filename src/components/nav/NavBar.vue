<template>
  <div id="nav-container">
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        style="height: 98%"
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
    <div id="copyright-container">© 2023 openhe</div>
  </div>
</template>

<script>
import {ref} from 'vue'

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