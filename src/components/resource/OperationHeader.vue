<template>
  <div id="operation-header-container">
    <el-row>
      <el-col :span="3">
        <el-switch
            v-model="option"
            class="ml-2"
            inline-prompt
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            active-text="Project"
            inactive-text="File"
            size="small"
            @change="onOptionChange"
        />
      </el-col>
    </el-row>
    <!--    <router-link to="/home/resource/projects" v-if="!showProjects">projects</router-link>-->
    <!--    <router-link to="/home/resource/files" v-else>files</router-link>-->
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

// handle option change
// true => projects, false => files
const option = ref(true);
const router = useRouter();
const onOptionChange = () => {
  console.log(option.value);
  if (!option.value) {
    router.push('/home/resource/files');
  }else{
    router.push('/home/resource/projects')
  }
}
</script>

<style scoped>

</style>