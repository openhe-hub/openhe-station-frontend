<template>
  <div id="header-container">
    <el-row>
      <el-col :span="8">
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col :span="8">
            <el-input
                v-model="searchText"
                class="w-50 m-2"
                size="large"
                placeholder="Search"
                :suffix-icon="Search"
            />
          </el-col>
          <el-col :span="6" :offset="1">
            <el-badge :value="200" :max="99" class="item">
              <el-button type="primary" :icon="Message" size="large">Messages</el-button>
            </el-badge>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-dropdown size="large" split-button type="success">
              More
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Blog</el-dropdown-item>
                  <el-dropdown-item>Resource</el-dropdown-item>
                  <el-dropdown-item>Settings</el-dropdown-item>
                  <el-dropdown-item>Chat</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-col>
          <el-col :span="1">
            <el-avatar :src="avatar"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script setup>
import {Message, Search} from "@element-plus/icons-vue";
import {ref} from "vue";
import avatar from '../../assets/img/avatar.jpg'

const searchText = ref();
</script>

<style scoped>
div#header-container {
  border: 0px solid black;
  border-radius: 5px;
  margin: 10px 0px 10px 10px;
  padding: 15px 0px 12px 10px;
  box-shadow: -2px -3px 8px rgba(0,0,0,0.25);
  background-color: white;
  height: 9vh;
}

#title-text {
  font-size: 25px;
  font-family: "Arial", "Microsoft YaHei", sans-serif;
  margin-top: 10px;
  margin-left: 20px;
  color:  #b25252;
  font-style: italic;
}

div#search-container {
  width: 250px;
  margin-right: 20px;
}

div#msg-container {
  display: inline-block;
}
</style>