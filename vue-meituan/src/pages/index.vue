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
    <el-row>
      <el-col>
        <my-card></my-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyMenu from "@/components/index/menu";
import MyLife from '@/components/index/life'
import MyCard from '@/components/index/card'
export default {
  components: {
    MyMenu,
    MyLife,
    MyCard,
  }
};
</script>

<style lang="scss">
    @import "@/assets/css/index/index.scss";
</style>