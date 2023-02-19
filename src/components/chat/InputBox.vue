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
        <el-button type="primary" plain round :icon="Position" @click="onSend">
          Send
        </el-button>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-button type="danger" plain round :icon="Delete" @click="onDelete">
          Delete
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {Position, Delete} from "@element-plus/icons-vue";
import api from "../../plugin/axios/config.js";
// emit
const emit = defineEmits(["send", "delete"])
// data
const question = ref("");
const answer = ref("");
const config = {
  maxRows: 3,
}
// api
async function query(){
  await api({
    url: "/api/chat",
    method: "post",
    data: {
      "question": question.value
    }
  }).then((resp) => {
    console.log(resp)
    answer.value = resp.data.resp
    let status = resp.data.success
    if (!status) answer.value="Error occurs! Please retry"
  }).catch((err) => {
    console.log(err)
  })
}
// event handler
// use async/await to wait respond
async function onSend (){
  await query()
  emit("send", question.value, answer.value)
}

const onDelete = () => {
  emit("delete")
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