<template>
  <div id="quickstart-container">
    <el-row>
      <el-col :span="11" :offset="1">
        <el-card class="box-card" shadow="always">
          <div class="text item">
            <span class="card-title">Start Notes</span>
            <el-button type="danger" :icon="Edit" circle/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="11" :offset="1">
        <el-card class="box-card" shadow="always">
          <div class="text item"><span class="card-title">Get Resource</span>
            <el-button type="warning" :icon="Cpu" circle/>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="11" :offset="1">
        <el-card class="box-card" shadow="always">
          <div class="text item">
            <span class="card-title">View Data</span>
            <el-button type="primary" color="#5aa4ae" :icon="DataLine" circle/>
          </div>
        </el-card>
      </el-col>
      <el-col :span="11" :offset="1">
        <el-card class="box-card" shadow="always">
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
</script>

<style scoped>
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