<template>
  <div class="geo-position">
      <div class="position">
          <i class="el-icon-location"></i>
          <router-link to="city">
              扬州
          </router-link>
          <router-link to="changecity" class="changeCity">切换城市</router-link>
          [
          <a href="">镇江 仪征 江都</a>
          ]
      </div>
      <div class="login-user">
          <router-link to="login" class="login">立即登陆</router-link>
          <router-link to="register" class="register">注册</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>