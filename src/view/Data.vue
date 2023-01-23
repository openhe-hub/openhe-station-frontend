<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-col>
          <TextReport></TextReport>
        </el-col>
        <el-col>
          <QuickStart></QuickStart>
        </el-col>
      </el-col>
      <el-col :span="12">
        <DataReport></DataReport>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import DataReport from "../components/index/DataReport.vue";
import TextReport from "../components/data/TextReport.vue";
import QuickStart from "../components/index/QuickStart.vue";

</script>

<style lang="less" scoped>

</style>