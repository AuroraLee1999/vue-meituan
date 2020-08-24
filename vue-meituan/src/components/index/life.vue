<template>
  <div class="my-life">
      <el-row>
          <ul class="nav">
              <li>
                  <router-link to="/">美团外卖</router-link>
              </li>
              <li>
                  <router-link to="/">猫眼电影</router-link>
              </li>
              <li>
                  <router-link to="/">美团酒店</router-link>
              </li>
              <li>
                  <router-link to="/">民宿/公寓</router-link>
              </li>
              <li>
                  <router-link to="/">商家入驻</router-link>
              </li>
              <li>
                  <router-link to="/">美团公益</router-link>
              </li>
          </ul>
      </el-row>
      <el-row>
          <el-col :span="14">
              <my-carousel /> 
          </el-col>
          <el-col :span="4"></el-col>
          <el-col :span="6"></el-col>
      </el-row>
  </div>
</template>

<script>
import MyCarousel from '@/components/index/carousel.vue'
export default {
    components:{
        MyCarousel,
    }
}
</script>

<style lang='scss'>
@import '@/assets/css/index/life.scss'
</style>