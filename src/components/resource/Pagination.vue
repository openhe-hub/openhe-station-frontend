<template>
  <div id="pagination">
    <el-pagination
        layout="prev, pager, next,jumper"
        @current-change="onPageChange"
        :total="total"
        :page-size="pageSize"
        :current-page="currentPage">
    </el-pagination>
  </div>
</template>

<script setup>
// props
import {toRefs} from "vue";

const props = defineProps({
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 0
  },
  currentPage: {
    type: Number,
    default: 1
  }
});

const {total, pageSize,currentPage} = toRefs(props);
// emit
const emit = defineEmits(['pageChange'])
const onPageChange = (currPage) => {
  emit('pageChange', currPage);
}
</script>

<style lang="less" scoped>
div#pagination {
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 5px;
  width: 30vw;
  box-shadow: -3px -1px 10px rgba(0, 0, 0, 0.25);
}
</style>