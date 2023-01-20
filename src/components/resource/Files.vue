<template>
  <div id="files-container">
    <div id="table-container">
      <el-table :data="tableData" id="table" stripe>
        <!--   name     -->
        <el-table-column prop="name" label="Name" min-width="12%" fixed>
          <template #header>
            <div style="display: flex; align-items: center">
              <el-icon><Document /></el-icon>
              <span style="margin-left: 3px">Name</span>
            </div>
          </template>
        </el-table-column>
        <!--   date       -->
        <el-table-column prop="date" label="Date" min-width="18%">
          <template #header>
            <div style="display: flex; align-items: center">
              <el-icon><Calendar /></el-icon>
              <span style="margin-left: 3px">Date</span>
            </div>
          </template>
        </el-table-column>
        <!--   status     -->
        <el-table-column prop="status" label="Status" min-width="15%">
          <template #header>
            <div style="display: flex; align-items: center">
              <el-icon><Flag /></el-icon>
              <span style="margin-left: 3px">Status</span>
            </div>
          </template>
          <template #default="scope">
            <el-tag v-if="scope.row.status==='ok'" type="success">OK</el-tag>
            <el-tag v-if="scope.row.status==='warning'" type="warning">WARNING</el-tag>
            <el-tag v-if="scope.row.status==='error'" type="danger">ERROR</el-tag>
          </template>
        </el-table-column>
        <!--  description   -->
        <el-table-column prop="description" label="Description" min-width="30%">
          <template #header>
            <div style="display: flex; align-items: center">
              <el-icon><Memo /></el-icon>
              <span style="margin-left: 3px">Description</span>
            </div>
          </template>
        </el-table-column>
        <!--     operation   -->
        <el-table-column prop="operation" label="Operation" min-width="25%">
          <template #header>
            <el-input v-model="search" size="small" placeholder="filter">
              <template #prefix>
                <el-icon><Operation/></el-icon>
              </template>
            </el-input>
          </template>
          <template #default="scope">
            <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">
              View
            </el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
              Download
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
const tableData = [
  {
    name: 'Tom',
    date: '2016-05-03',
    status: 'ok',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'ok',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'ok',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'warning',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'ok',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }, {
    name: 'Tom',
    date: '2016-05-03',
    status: 'error',
    description: 'this is a brief description',
    operation: 'edit',
  }
]
</script>

<style lang="less" scoped>
div#files-container {
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  div#table-container{
    height: 68vh;
    width: 80vw;
    padding: 10px;

    #table {
      height: 100%;
      width: 100%;
      margin: 10px;
    }
  }
}
</style>