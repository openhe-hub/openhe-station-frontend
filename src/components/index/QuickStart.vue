<template>
  <div id="quickstart-container">
    <el-row>
      <el-col :span="11" :offset="1">
        <el-card class="box-card" shadow="hover" @click="toBlog">
          <div class="text item">
            <span class="card-title">Start Notes</span>
            <el-button type="danger" :icon="Edit" circle/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="11" :offset="1">
        <el-card class="box-card" shadow="hover" @click="toResource">
          <div class="text item"><span class="card-title">Get Resource</span>
            <el-button type="warning" :icon="Cpu" circle/>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="11" :offset="1">
        <el-card class="box-card" shadow="hover" @click="toData">
          <div class="text item">
            <span class="card-title">View Data</span>
            <el-button type="primary" color="#5aa4ae" :icon="DataLine" circle/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="11" :offset="1">
        <el-card class="box-card" shadow="hover" @click="toGithub">
          <div class="text item">
            <span class="card-title">My Github</span>
            <el-button type="warning" color="#626aef" :icon="Position" circle/>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script setup>
import {Cpu, DataLine, Edit, Position} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";

// event
const emit = defineEmits(['updateNavId']);

// card click listener
const router = useRouter();

const toBlog = () => {
  router.push({path: '/home/blog'});
  emit('updateNavId', 2);
}

const toResource = () => {
  router.push({path: '/home/resource'});
  emit('updateNavId', 3);
}

const toData = () => {
  router.push({path: '/home/data'});
  emit('updateNavId', 4);
}

const toGithub = () => {
  window.open('https://github.com/openhe-hub');
}
</script>

<style scoped>
div#quickstart-container {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 5px 10px 10px;
  padding: 10px;
  height: 34.5vh;
}

.box-card {
  width: 15vw;
  margin-top: 15px;
  margin-bottom: 10px;
  height: 12vh;
  text-align: center;
}

.card-title {
  margin-right: 5px;
  margin-left: 5px;
  font-size: 14px;
}

div.item /deep/ {
  font-size: 12px;
  text-align: center;
}
</style>