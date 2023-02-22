<template>
  <div id="chatbox-container">
    <el-scrollbar height="100%">
      <div v-for="(content,idx) in chatList"
           :key="idx"
           class="chatbox"
           :style="{backgroundColor:(isUser(idx)?'white':'white')}"
      >
        <el-row>
          <el-col :span="2">
            <UserIcon v-if="isUser(idx)"></UserIcon>
            <RobotIcon v-else></RobotIcon>
          </el-col>
          <el-col :span="22">
            <div id="answer-container" v-if="isUser(idx)">
              {{ content }}
            </div>
            <MarkdownBox :text="content" v-else/>
          </el-col>
        </el-row>
      </div>
    </el-scrollbar>

  </div>
</template>

<script setup>
import {computed, reactive, ref, toRefs, watchEffect} from "vue";
import UserIcon from "../../assets/icon/UserIcon.vue";
import RobotIcon from "../../assets/icon/RobotIcon.vue";
import MarkdownBox from "./MarkdownBox.vue";

const props = defineProps({
  curr_question: {
    type: String
  },
  curr_answer: {
    type: String
  }
})

const {curr_question, curr_answer} = toRefs(props)

let chatList = reactive([])

watchEffect(() => {
  console.log(curr_question.value);
  console.log(curr_answer.value);
  if (curr_question.value !== "" && curr_answer.value !== "") {
    chatList.push(curr_question.value)
    chatList.push(curr_answer.value)
  }
})

const isUser = (idx) => {
  return !(idx % 2);
}
</script>

<style scoped lang="less">
div#chatbox-container {
  width: 98%;
  height: 100%;

  div.chatbox {
    width: 95%;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 12px;
    margin-left: 10px;
    font-family: "Times New Roman", sans-serif;
    font-size: 18px;
  }
}

div#answer-container {
  margin-top: 4px;
  margin-bottom: 5px;
}
</style>