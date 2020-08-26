<template>
  <div class="my-card">
      <div class="card-content">
          <card-header :nav="movie"></card-header>
          <card-movie></card-movie>
          <!-- <card-header :nav="minsu"></card-header>
          <card-content></card-content> -->
      </div>
  </div>
</template>

<script>
import CardHeader from '@/components/index/cardHeader.vue'
import cardMovie from '@/components/index/cardMovie.vue'
export default {
    components:{
        CardHeader,
        cardMovie
    },
    data(){
        return{
            movie:{
                name:"movie",
                title:"猫眼电影",
                list:[
                    {
                        text:"正在热映",
                        tab:"hot"
                    },{
                        text:"即将上映",
                        tab:"prepare"
                    }
                ]
            },
            minsu:{
                name:"minsu",
                title:"推荐民宿",
                list:[
                    {
                        text:"上海",
                        tab:"shanghai"
                    },{
                        text:"南京",
                        tab:"nanjing"
                    },{
                        text:"杭州",
                        tab:"hangzhou"
                    },{
                        text:"苏州",
                        tab:"suzhou"
                    },{
                        text:"合肥",
                        tab:"hefei"
                    }
                ]
            },
            like:{
                title:"猜你喜欢",
                list:[{
                    text:"就为你甄选最适合的",
                    tab:"best"
                }]
            }
        }
    }
}
</script>

<style>

</style>