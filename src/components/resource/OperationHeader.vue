<template>
  <div id="operation-header-container">
    <el-row>
      <el-col :span="5">
        <el-switch
            v-model="option"
            class="ml-2"
            inline-prompt
            style="--el-switch-on-color: #5bc827; --el-switch-off-color:  #fb4949"
            active-text="Project"
            inactive-text="Files"
            @change="onOptionChange"
        />
      </el-col>
      <el-col :span="3">
        <el-button :icon="Plus" color="#00a381" id="add-btn" plain circle/>
      </el-col>
      <el-col :span="3">
        <el-button :icon="Download" color="#6c216d" id="download-btn" plain circle/>
      </el-col>
      <el-col :span="6" :offset="1">
        <el-button :icon="Select" type="primary" round plain id="multi-btn">Multi Download</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {Download, Plus, Search, Select, Upload} from "@element-plus/icons-vue";

const emit = defineEmits(['optionChange']);

// handle option change
// true => projects, false => files
const option = ref(true);
const router = useRouter();
const onOptionChange = () => {
  if (!option.value) {
    router.push('/home/resource/files');
  } else {
    router.push('/home/resource/projects')
  }
  emit('optionChange', option.value);
}

onMounted(() => {
  let route = useRoute();
  option.value = route.path.split("/")[3] === "projects";
})
</script>

<style scoped lang="less">
div#operation-header-container {
  border-radius: 10px;
  width: 30vw;
  padding: 5px;
  box-shadow: -3px -1px 10px rgba(0, 0, 0, 0.25);
  margin-bottom: 8px;
  text-align: center;

  /deep/ .el-switch__core {
    height: 23px;
  }

  /deep/ #add-btn {
    height: 28px;
    width: 28px;
    margin-top: 2px;
  }

  /deep/ #download-btn {
    height: 30px;
    width: 30px;
    margin-top: 1px;
  }

  /deep/ #multi-btn {
    height: 28px;
    margin-top: 2px;
  }
}
</style>