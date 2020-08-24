<template>
  <div class="page-index">
    <el-row>
      <el-col :span='5'>
          <my-menu /> 
      </el-col>
      <el-col :span="19">
          <my-life />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyMenu from "@/components/index/menu";
import MyLife from '@/components/index/life'
export default {
  components: {
    MyMenu,
    MyLife
  }
};
</script>

<style lang="scss">
    @import "@/assets/css/index/index.scss";
</style>