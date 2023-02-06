<template>
  <div id="quickstart-container">
    <el-row v-for="i in [0,1]" :key="i">
      <el-col v-for="(card,index) in data.slice(i*2,(i+1)*2)" :key="index" :span="11" :offset="1">
        <el-card class="box-card" shadow="hover" @click="onClickCard(index+i*2)">
          <div class="text item">
            <span class="card-title">{{ card.title }}</span>
            <el-button :color="card.color" :icon="card.icon" circle/>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array
  }
});
const data = props.data;

// event
const emit = defineEmits(['updateNavId', 'clickCard']);

const onClickCard = (index) => {
  emit("clickCard", index);
}


</script>

<style scoped>
div#quickstart-container {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 5px 10px 10px;
  padding: 10px;
  height: 34.5vh;
}

.box-card {
  width: 15vw;
  margin-top: 15px;
  margin-bottom: 10px;
  height: 12vh;
  text-align: center;
}

.card-title {
  margin-right: 5px;
  margin-left: 5px;
  font-size: 14px;
}

div.item /deep/ {
  font-size: 12px;
  text-align: center;
}
</style>