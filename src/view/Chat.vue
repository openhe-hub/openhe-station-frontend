<template>
  <div id="chat-container">
    <el-row class="chatbox-row">
      <ChatBox
          :curr_question="curr_question"
          :curr_answer="curr_answer"
      />
    </el-row>
    <el-row class="input-box-input">
      <el-col :offset="3" :span="18">
        <InputBox
            @send="onSend"
            @delete="onDelete"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import ChatBox from "../components/chat/ChatBox.vue";
import InputBox from "../components/chat/InputBox.vue";
import {ref} from "vue";

const curr_question = ref("")
const curr_answer = ref("")

const onSend = (question, answer) => {
  curr_question.value = question;
  curr_answer.value = answer
}

const onDelete = () => {

}
</script>

<style scoped lang="less">
div#chat-container {
  margin-left: 10px;
  width: 95%;
  height: 76.5vh;
  padding: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  .chatbox-row {
    height: 65vh;
  }

  .input-box-input {
    height: 7vh;
  }
}
</style>