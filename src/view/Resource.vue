<template>
  <div>
    <el-row>
      <el-col :span="10" :offset="1">
        <OperationHeader></OperationHeader>
      </el-col>
      <el-col :span="8" :offset="3">
        <Pagination></Pagination>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script setup>
import OperationHeader from "../components/resource/OperationHeader.vue";
import Pagination from "../components/resource/Pagination.vue";
</script>

<style lang="less" scoped>

</style>