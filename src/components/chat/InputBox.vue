<template>
  <div id="input-box-container">
    <el-scrollbar height="100%">
      <el-input
          v-model="question"
          :autosize="config"
          type="textarea"
          placeholder="Type to chat!"
          :suffix-icon="Position"
          class="input"
      />
    </el-scrollbar>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {Position} from "@element-plus/icons-vue";

const question = ref("");
const config = {
  maxRows: 5,
}
</script>

<style scoped lang="less">
div#input-box-container {
  width: 50%;
  height: 100%;
  .input{
    max-height: 100px;
    /deep/.el-textarea__inner {
      border: 0;
      resize: none;
      overflow-y: hidden
    }
  }
}
</style>