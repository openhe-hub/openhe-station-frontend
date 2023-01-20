<template>
  <div id="pagination">
    <el-pagination layout="prev, pager, next" :total="100" />
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
div#pagination{
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 5px;
  width: 30vw;
  box-shadow: -3px -1px 10px rgba(0, 0, 0, 0.25);
}
</style>