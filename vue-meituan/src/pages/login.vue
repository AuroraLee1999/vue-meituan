<template>
  <div class="my-login">
    <div class="login-header">
      <a href="http://www.meituan.com" class="logo"></a>
    </div>
    <div class="login-container">
      <div class="login-img">
        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt />
      </div>
      <div class="login-panel">
        <!-- 提示错误信息 -->
        <p class="tips" v-if="error">{{this.error}}</p>
        <p class="choose-login">
          <span>账号登陆</span>
          <span class="login-phone">手机动态码登录<i class="el-icon-mobile-phone"></i></span>
        </p>
        <el-input v-model="userName" placeholder="手机号" prefix='+86'>
          <template slot="prepend">+86</template>
        </el-input>
        <el-input placeholder="密码" v-model="password" type="password">
          <i class="el-icon-lock" ></i>
        </el-input>
        <p class="forget">
          <a>忘记密码？</a>
        </p>
        <el-button class="login-button" @click="login">登录</el-button>
        <p class="register">
          <span>还没有账号？</span>
          <span>
            <router-link :to="{name:'register'}">免费注册</router-link>
          </span>
        </p>
        <div class="login-oauth">
          <h3 class="oauth-title"><span class="title">用合作网站账号登陆</span></h3>
          <div class="oauth-friends">
            <span class="oauth_link_qq"></span>
            <span class="oauth_link_weibo"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <ul>
        <li>
          <a href="#">关于美团</a>
        </li>
        <li>
          <a href>加入我们</a>
        </li>
        <li>
          <a href>商家入驻</a>
        </li>
        <li>
          <a href>帮助中心</a>
        </li>
        <li>
          <a href>美团手机版</a>
        </li>
      </ul>
      <p>©2018 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      userName: "",
      password: "",
      error:''
    };
  },
  methods:{
    login(){
      if(this.userName == ''){
        this.error = '请输入用户名';
        return false;
      }
      if(this.password == ''){
        this.error = '请输入密码'
      }
      api.userLogin({
        params:{
          userName:this.userName,
          password:this.password,
        }
      }).then(res=>{
        if(res.data.status == 'success'){
          this.$router.push({name:'index'});
          this.$store.commit('setUsername', this.userName);
        }
        else{
          this.error = res.data.msg;
        }
      })
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/css/login/index.scss'
</style>