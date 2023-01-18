<template>
  <div id="index-container">
    <el-row>
      <el-col :span="12">
        <el-col>
          <QuickStart></QuickStart>
        </el-col>
<!--        <el-divider></el-divider>-->
        <el-col>
          <Timeline></Timeline>
        </el-col>
      </el-col>
      <el-col :span="12">
        <DataReport></DataReport>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import QuickStart from "../components/index/QuickStart.vue";
import DataReport from "../components/index/DataReport.vue";
import Timeline from "../components/index/Timeline.vue";
</script>

<style scoped>
div#index-container {
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0px 10px 0px 10px;
  padding: 0px 10px 15px 0px;
  width: 81.5vw;
  height: 77vh;
  /*border-radius: 5px;*/
  /*box-shadow: -3px -1px 10px rgba(0,0,0,0.25);*/
}
</style>