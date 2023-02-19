<template>
  <div id="chat-container">
    <el-row>
      <ChatBox></ChatBox>
    </el-row>
    <el-row>
      <InputBox></InputBox>
    </el-row>
  </div>
</template>

<script setup>

import ChatBox from "../components/chat/ChatBox.vue";
import InputBox from "../components/chat/InputBox.vue";
</script>

<style scoped lang="less">
div#chat-container{
  margin-left: 10px;
  width: 95%;
  height: 12vh;
  padding: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
</style>