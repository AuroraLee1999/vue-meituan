<template>
  <div class="center-carousel">
    <el-carousel height="150px">
      <el-carousel-item v-for="(item,index) in carouselImg" :key="index">
        <img :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data(){
        return{
            carouselImg:[{
                index:1,
                url:"http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
            },{
                index:2,
                url:""
            },{
                index:3,
                url:""
            },{
                index:4,
                url:""
            },{
                index:5,
                url:""
            },]
        }
    }
};
</script>

<style>
</style>