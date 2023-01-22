<template>
  <div>
    <el-row>
      <el-col :span="10" :offset="1">
        <OperationHeader @optionChange="onOptionChange">
        </OperationHeader>
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
        :data="srcData">
    </router-view>
  </div>
</template>

<script setup>
import OperationHeader from "../components/resource/OperationHeader.vue";
import Pagination from "../components/resource/Pagination.vue";
import {computed, ref} from "vue";

let isFileShown = true;
const beginIdx = ref(0);
const endIdx = ref(isFileShown ? 8 : 6);

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
const projectData = [
  {
    name: 'project-name',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  }, {
    name: 'project-name',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  }, {
    name: 'project-name',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  }, {
    name: 'project-name',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  }, {
    name: 'project-name',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  }, {
    name: 'project-name',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  }, {
    name: 'project-name-2222',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  }, {
    name: 'project-name',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  }, {
    name: 'project-name',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  }, {
    name: 'project-name',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  }, {
    name: 'project-name',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  }, {
    name: 'project-name',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  }, {
    name: 'project-name-3333',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  }, {
    name: 'project-name',
    description: 'This is a brief description about this project.',
    tags: ['Vue', 'Java']
  },
];
let srcData = tableData;

// handle page change
const onPageChange = (currPage) => {
  beginIdx.value = (currPage - 1) * (isFileShown ? 8 : 6);
  endIdx.value = currPage * (isFileShown ? 8 : 6);
}
// handle option change
const onOptionChange = (option) => {
  isFileShown = !option;
  console.log(isFileShown);
  beginIdx.value = 0;
  endIdx.value = isFileShown ? 8 : 6;
  srcData = isFileShown ? tableData : projectData;
}


const length = computed(() => {
  return isFileShown ? 8 : 6;
})
</script>

<style lang="less" scoped>

</style>