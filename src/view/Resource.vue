<template>
  <div>
    <el-row>
      <el-col :span="10" :offset="1">
        <OperationHeader
            @optionChange="onOptionChange"
            :isFileShown="isFileShown"
        >
        </OperationHeader>
      </el-col>
      <el-col :span="8" :offset="3">
        <Pagination
            @pageChange="onPageChange"
            :total="isFileShown?length1:length2"
            :pageSize="isFileShown?8:6"
            :current-page="currentPage"
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
import {useRoute} from "vue-router";

// data
const isFileShown = ref(true);
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
const length1 = tableData.length;
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
const length2 = projectData.length;
const beginIdx = ref(0);
const endIdx = ref(isFileShown.value ? 8 : 6);
let srcData = tableData;
// refresh position
let route = useRoute();
if (route.path.split('/').at(3) === 'projects') {
  isFileShown.value = false;
  srcData = projectData;
}

// handle page change
let currentPage = ref(1);
const onPageChange = (currPage) => {
  beginIdx.value = (currPage - 1) * (isFileShown.value ? 8 : 6);
  endIdx.value = currPage * (isFileShown.value ? 8 : 6);
  currentPage.value = currPage;
}

// handle option change
const onOptionChange = (option) => {
  isFileShown.value = !option;
  beginIdx.value = 0;
  endIdx.value = isFileShown.value ? 8 : 6;
  srcData = isFileShown.value ? tableData : projectData;
  currentPage.value = 1;
}
</script>

<style lang="less" scoped>

</style>