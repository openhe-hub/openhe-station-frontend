<template>
  <div id="container">
    <el-row>
      <el-col span="6" class="col">
        <div id="title-text">
          Index Page
        </div>

      </el-col>
      <el-col span="6" class="col">
        <el-row>
          <el-col span="3">
            <el-input
                v-model="searchText"
                class="w-50 m-2"
                size="large"
                placeholder="Please Input"
                :suffix-icon="Search"
            />
          </el-col>
          <el-col span="3" :offset="1">
            <el-badge :value="200" :max="99" class="item">
              <el-button type="primary" :icon="Message" size="large">messages</el-button>
            </el-badge>
          </el-col>
          <el-col span="3" :offset="1">
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
          <el-col span="3" :offset="1">
            <el-avatar size="medium" :src="avatar"/>
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
div#container {
  font-family: "Arial", "Microsoft YaHei", sans-serif;
  font-size: 20px;
  font-weight: 350;
  height: 100%;
  width: 100%;
  border: 0px solid black;
  border-radius: 5px;
  margin: 10px 0px 10px 10px;
  padding: 20px 0px 20px 10px;
  box-shadow: 1px 1px 5px #000;
  background-color: #d5ebe1;
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

.col {
  width: 50%;
}
</style>