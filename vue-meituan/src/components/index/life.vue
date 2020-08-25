<template>
  <div class="my-life">
    <el-row class="el-row">
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
      <el-col :span="4">
        <div class="my-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="my-life-login">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
          <p class="my-life-login-name">Hi! 你好</p>
          <router-link to="/">
              <el-button round>注册</el-button>
          </router-link>
          <router-link to="/">
              <el-button round>立即登陆</el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="my-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="my-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="my-life-business"></div>
      </el-col>
      <el-col :span="6">
          <div class="my-life-downapp">
              <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
              <p >美团APP手机版</p>
              <p class="last">
                  <span>1元起</span>
                  吃喝玩乐
              </p>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyCarousel from "@/components/index/carousel.vue";
export default {
  components: {
    MyCarousel
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/index/life.scss";
</style>