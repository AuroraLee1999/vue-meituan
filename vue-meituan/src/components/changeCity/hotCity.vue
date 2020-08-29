<template>
  <div class="my-hotcity">
      <dl>
          <dt>{{title}}</dt>
          <dd v-for="(item,index) in hotCityList" :key="index">{{item.name}}</dd>
      </dl>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data(){
        return{
            hotCityList:[]
        }
    },
    props:['title'],
    created(){
        api.getHotCity().then(res=>{
            this.hotCityList = res.data.data;
        })
    }
}
</script>

<style lang='scss'>
@import '@/assets/css/changecity/hot.scss'
</style>