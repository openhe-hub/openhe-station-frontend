<template>
  <div id="container">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        style="height: 82vh"
    >
      <el-menu-item index="1">
        <el-icon>
          <House/>
        </el-icon>
        <template #title>Home</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon>
          <EditPen/>
        </el-icon>
        <template #title>Blog</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon>
          <Wallet/>
        </el-icon>
        <template #title>Resource</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <Document/>
        </el-icon>
        <template #title>Data</template>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon>
          <Setting/>
        </el-icon>
        <template #title>Settings</template>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon>
          <ChatSquare/>
        </el-icon>
        <template #title>Chat</template>
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

</style>