<template>
    <el-row class="myHeader">
      <el-col :span="10">
            <geo-position />
      </el-col>
      <el-col :span="14">
            <right-nav />
      </el-col>
    </el-row>
</template>

<script>
import GeoPosition from './geoPosition'
import RightNav from './rightNav'
export default {
  components:{
    GeoPosition,
    RightNav
  }
};
</script>

<style lang='scss'>
@import '@/assets/css/public/header/topbar.scss';
</style>