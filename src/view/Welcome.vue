<template>
  <div id="container">
    <div id="time-container">
      {{ currTime }}
    </div>
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
      <div id="copyright-container">© 2023 openhe</div>
    </div>
    <div id="sentence-container" @mouseover="onOver" @mouseleave="onLeave">
      「 {{ sentence }}」
      <div v-if="isFromShown">—— {{ from }}</div>
    </div>

  </div>
</template>

<script setup>
import {DArrowRight, Search} from "@element-plus/icons-vue";
import {computed, onMounted, reactive, ref} from "vue";
import api from "../plugin/axios/config.js";

// typewriter
const typewriter = reactive(['', '']);
let i = 0, timer = 0, curr = 0;
const str = ['Welcome to', 'Openhe Station.'];

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
onMounted(() => {
  typing();
  updateSentence();
})

// time
const currTime = computed(() => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`
})

// sentence
const sentence = ref('');
const from = ref('');
const isHover = ref(false);
const updateSentence = () => {
  api({
    url: 'https://v1.hitokoto.cn/',
    method: 'get',
    params: {
      c: "i"
    }
  }).then(resp => {
    sentence.value = resp.data.hitokoto;
    from.value = resp.data.from;
  }).catch(err => {
    console.log(err);
  })
}

const onOver = () => {
  isHover.value = true;
}

const onLeave = () => {
  isHover.value = false;
}

const isFromShown=computed(()=>{
  return isHover.value;
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

div#time-container {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: -apple-system, BlinkMacSystemFont, serif;
  font-weight: 400;
  font-size: 45px;
  color: white;
}

div#center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  text-align: center;
  vertical-align: middle;
  padding: 4% 2%;
}

div#sentence-container {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: -apple-system, BlinkMacSystemFont, serif;
  font-weight: 400;
  font-size: 15px;
  color: white;
  text-align: center;
}

div#sentence-container:hover {
  background: rgba(198, 157, 157, 0.2);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 15px;
  transition: background-color 0.6s;
}

.welcome_title {
  font-family: "Arial", "Microsoft YaHei", sans-serif;
  font-size: 25px;
  font-weight: bold;
}

div.blur-container {
  background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  border: 0px solid black;
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2);
}

#copyright-container {
  margin-top: 10%;
  color: #c4c7ca;
  font-family: Consolas, serif;
  font-weight: lighter;
}
</style>