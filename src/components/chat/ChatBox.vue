<template>
  <div id="chatbox-container">
    <el-scrollbar height="100%">
      <div v-for="(content,idx) in chatList"
           :key="idx"
           class="chatbox"
           :style="{backgroundColor:(!(idx%2)?'white':'#ebebeb')}"
      >
        <el-row>
          <el-col :span="2" v-if="!(idx%2)"><UserIcon></UserIcon></el-col>
          <el-col :span="2" v-else><RobotIcon></RobotIcon></el-col>
          <el-col :span="22">
            {{content}}
          </el-col>
        </el-row>
      </div>
    </el-scrollbar>

  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import UserIcon from "../../assets/icon/UserIcon.vue";
import RobotIcon from "../../assets/icon/RobotIcon.vue";

let chatList=reactive(["question1","answer1","question2","answer2","question3"])
</script>

<style scoped lang="less">
div#chatbox-container{
  width: 98%;
  height: 100%;
  div.chatbox{
    height: 50px;
    width: 95%;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 12px;
    margin-left: 10px;
    font-family: "Times New Roman", sans-serif;
    font-size: 18px;
  }
}
</style>