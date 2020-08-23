<template>
  <div class="myHeader">
      <el-row>
          <top-bar />
      </el-row>
      <el-row>
          <search-bar />
      </el-row>
  </div>
</template>

<script>
import SearchBar from './search'
import TopBar from './topBar'
export default {
    components:{
        SearchBar,
        TopBar
    }
}
</script>

<style lang="scss">
@import '@/assets/css/public/header/index.scss';
</style>