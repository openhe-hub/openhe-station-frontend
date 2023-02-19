<template>
  <div id="chatbox-container">
    <el-scrollbar height="100%">
      <div v-for="(content,idx) in chatList"
           :key="idx"
           class="chatbox"
           :style="{backgroundColor:(!(idx%2)?'white':'#ebebeb')}"
      >
        <el-row>
          <el-col :span="2" v-if="!(idx%2)">
            <UserIcon></UserIcon>
          </el-col>
          <el-col :span="2" v-else>
            <RobotIcon></RobotIcon>
          </el-col>
          <el-col :span="22">
            <div id="answer-container">
              {{ content }}
            </div>
          </el-col>
        </el-row>
      </div>
    </el-scrollbar>

  </div>
</template>

<script setup>
import {reactive, ref, toRefs, watchEffect} from "vue";
import UserIcon from "../../assets/icon/UserIcon.vue";
import RobotIcon from "../../assets/icon/RobotIcon.vue";

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

div#answer-container{
  margin-top: 4px;
  margin-bottom: 5px;
}
</style>