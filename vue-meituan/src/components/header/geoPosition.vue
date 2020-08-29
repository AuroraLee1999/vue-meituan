<template>
  <div class="geo-position">
      <div class="position">
          <i class="el-icon-location"></i>
          <router-link to="/changeCity">
              {{position.name}}
          </router-link>
          <router-link to="changecity" class="changeCity">切换城市</router-link>
          [
          <a href="" v-for="(item, index) in position.nearCity" :key="index">{{item.name}}</a>
          ]
      </div>
      <div class="login-user">
          <router-link to="login" class="login">立即登陆</router-link>
          <router-link to="register" class="register">注册</router-link>
      </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data(){
        return{
            position:{},
        }
    },
    created(){
        api.getPosition().then(res=>{
            this.position = res.data.data;
        })
    },
    mounted(){
        console.log(this.$store)
    }
}
</script>

<style>

</style>