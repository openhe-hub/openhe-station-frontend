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
                  <el-dropdown-item v-for="(item,index) in list" :key="index" @click="onItemClick(index)">
                    <router-link :to="item.route">{{ item.name }}</router-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-col>
          <el-col :span="1">
            <el-avatar :src="avatar" @click="avatarOnClick"/>
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

const emit = defineEmits(['routeChange']);

const onItemClick = (index) => {
  emit('routeChange', list[index].index);
}

const list = [
  {name: 'Blog', route: '/home/blog', index: 2},
  {name: 'Resource', route: '/home/resource', index: 3},
  {name: 'Settings', route: '/home/settings', index: 5},
  {name: 'Chat', route: '/home/chat', index: 6},
]

const searchText = ref();

const avatarOnClick=()=>{
  window.open('https://github.com/openhe-hub');
}
</script>

<style scoped>
div#header-container {
  border: 0px solid black;
  border-radius: 5px;
  margin: 10px 0px 10px 10px;
  padding: 15px 0px 12px 10px;
  box-shadow: -2px -3px 8px rgba(0, 0, 0, 0.25);
  background-color: white;
  height: 9vh;
}

#title-text {
  font-size: 25px;
  font-family: "Arial", "Microsoft YaHei", sans-serif;
  margin-top: 10px;
  margin-left: 20px;
  color: #b25252;
  font-style: italic;
}

div#search-container {
  width: 250px;
  margin-right: 20px;
}

div#msg-container {
  display: inline-block;
}

.router-link-active {
  text-decoration: none;
  color: black;
}

/deep/ .is-active {
  background-color: rgba(178, 199, 227, 0.4);
}

a {
  text-decoration: none;
  color: black;
}
</style>