<template>
  <div id="input-box-container">
    <el-row>
      <el-col :span="15">
        <el-scrollbar height="100%">
          <el-input
              v-model="question"
              :autosize="config"
              type="textarea"
              placeholder="Type to chat!"
              class="input"
          />
        </el-scrollbar>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-button type="primary" plain round :icon="Position">
          Send
        </el-button>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-button type="danger" plain round :icon="Delete">
          Delete
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {Position,Delete} from "@element-plus/icons-vue";

const question = ref("");
const config = {
  maxRows: 3,
}
</script>

<style scoped lang="less">
div#input-box-container {
  width: 100%;
  height: 50%;
  padding: 10px;
  margin: 20px 10px 10px;

  // horizontal
  text-align: center;

  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  //border-radius: 8px;

  .input {
    :deep(.el-textarea__inner) {
      border: 0;
      resize: none;
      overflow-y: hidden
    }
  }
}
</style>