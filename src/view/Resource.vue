<template>
  <div>
    <el-row>
      <el-col :span="10" :offset="1">
        <OperationHeader></OperationHeader>
      </el-col>
      <el-col :span="8" :offset="3">
        <Pagination
            @pageChange="onPageChange"
            :total="tableData.length"
            :pageSize="length"
            >
        </Pagination>
      </el-col>
    </el-row>
    <router-view
        :beginIdx="beginIdx"
        :endIdx="endIdx"
        :tableData="tableData">
    </router-view>
  </div>
</template>

<script setup>
import OperationHeader from "../components/resource/OperationHeader.vue";
import Pagination from "../components/resource/Pagination.vue";
import {ref} from "vue";

const length = 8;
const beginIdx = ref(0);
const endIdx = ref(length);


const tableData = [
  {
    name: 'Tom',
    date: '2016-05-03',
    status: 'ok',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'ok',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'ok',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'warning',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'ok',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }
];

const onPageChange = (currPage) => {
  beginIdx.value = (currPage - 1) * length;
  endIdx.value = currPage * length;
}

</script>

<style lang="less" scoped>

</style>