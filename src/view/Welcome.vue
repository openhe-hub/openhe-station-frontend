<template>
  <div id="container">
    <div id="center" class="blur-container">
      <p class="welcome_title">{{ typewriter[0] }}</p>
      <p class="welcome_title">{{ typewriter[1] }}</p>
      <el-button type="primary" size="large">
        Enter
        <el-icon class="el-icon--right">
          <DArrowRight/>
        </el-icon>
      </el-button>
      <el-button type="success" size="large">
        Search
        <el-icon class="el-icon--right">
          <Search/>
        </el-icon>
      </el-button>
      <p>[Sentence]</p>
    </div>
  </div>
</template>

<script setup>
import {DArrowRight, Search} from "@element-plus/icons-vue";
import {onMounted, reactive, ref} from "vue";

// typewriter
const typewriter = reactive(['', '']);
let i = 0, timer = 0, curr = 0, isFlash = false;
const str = ['Welcome to', 'openhe-station.'];

const typing = () => {
  if (curr < str.length) {
    typewriter[curr] = str[curr].slice(0, (i++) + 1) + (i === str[curr].length ? "" : "|");
    if (i === str[curr].length) {
      curr++;
      i = 0;
    }
    timer = setTimeout(() => {
      typing()
    }, 120);
  } else {
    clearTimeout(timer);
  }
}

const flashing = () => {
  if (curr === str.length) {
    console.log(typewriter[1]);
    if (!isFlash) {
      typewriter[1] += '|'
      isFlash = true;
    } else {
      typewriter[1] = typewriter[1].slice(0, typewriter[1].length - 1);
      isFlash = false;
    }
  }
  timer = setTimeout(() => {
    flashing()
  }, 400)
}

onMounted(() => {
  typing();
  flashing()
})


</script>

<style scoped>
div#container {
  width: 100%;
  height: 100%;
  position: fixed;
  background: url("../assets/img/welcome_background.jpg") no-repeat center;
  background-size: cover;
  margin: 0;
}

div#center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  text-align: center;
  vertical-align: middle;
  padding: 5% 2%;
}

.welcome_title {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  font-size: 25px;
}

div.blur-container {
  background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border: 0px solid black;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
}
</style>