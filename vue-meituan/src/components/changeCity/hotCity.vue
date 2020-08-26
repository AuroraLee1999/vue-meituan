<template>
  <div class="my-hotcity">
      <dl>
          <dt>{{title}}</dt>
          <dd v-for="(item,index) in hotCityList" :key="index">{{item}}</dd>
      </dl>
  </div>
</template>

<script>
export default {
    data(){
        return{
            hotCityList:["北京", "上海", "广州", "深圳", "天津", "西安", "重庆", "杭州", "南京", "武汉", "成都"]
        }
    },
    props:['title']
}
</script>

<style lang='scss'>
@import '@/assets/css/changecity/hot.scss'
</style>