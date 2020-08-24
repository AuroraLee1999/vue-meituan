<template>
  <div class="layout-default">
    <el-container>
      <el-header height=''>
        <!-- <my-header /> -->d
      </el-header>
      <el-main height=''>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import myHeader from '@/components/header/index.vue'
import myFooter from '@/components/footer/index.vue'
export default {
  components:{
    myHeader,
    myFooter,
  }
};
</script>

<style>

</style>