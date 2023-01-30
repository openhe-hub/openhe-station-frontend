<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-row>
          <Tag :groupIdx="groupIdx"
              :passageIdx="passageIdx">
          </Tag>
        </el-row>
        <el-row>
          <Menu :active-id="'1-1'"
                @noteChange="onNoteChange">
          </Menu>
        </el-row>
      </el-col>
      <el-col :span="18">
        <Reader :groupIdx="groupIdx" :passageIdx="passageIdx"></Reader>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import Tag from "../components/blog/Tag.vue";
import Menu from "../components/blog/Menu.vue";
import Reader from "../components/blog/Reader.vue";
import {reactive, ref} from "vue";

// curr value
const groupIdx = ref(0);
const passageIdx = ref(0);

// handle note change
const onNoteChange = (param) => {
  groupIdx.value = param[0];
  passageIdx.value = param[1];
}
</script>

<style lang="less" scoped>

</style>