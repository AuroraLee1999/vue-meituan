<template>
  <div class="my-products-list">
    <ul class="produceList">
      <li v-for="(item) in nav" :key="item.key" :class="{'active':item.active}">{{item.name}}</li>
    </ul>
    <!-- <hr> -->
    <el-row>
      <left-item :item='item' v-for="(item) in productsList" :key="item.title"></left-item>
    </el-row>
  </div>
</template>

<script>
import LeftItem from '@/components/products/leftItem.vue'
export default {
  data(){
    return{
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productsList: [
        {
          image: "https://p1.meituan.net/msmerchant/7074bb9337b91ef734d9cd144cc0658b119411.jpg@440w_250h_1e_1c",
          title: "老九门东北烤肉（万达店）",
          type: "food",
          score: 5,
          commentNum: 68,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃"
            }
          ],
          tab: ["日式烧烤/烤肉", "万达广场"],
          address: "邗江区邗江中路302号万达茂广场3幢111室（桃满观对面，门朝北，街边1楼）",
          avgPrice: 50,
          dealItems: [
            {
              title: "100元代金券1张，可叠加",
              price: 88,
              counterPrice: 100,
              saleNum: 429,
              priceType: "元"
            },{
              title: "九门❤双人套餐，提供免费WIFI",
              price: 88,
              counterPrice: 163,
              saleNum: 130,
              priceType: "元"
            },{
              title: "九门❤私人雪碧套餐",
              price: 198,
              counterPrice: 325,
              saleNum: 71,
              priceType: "元"
            }
          ]
        }
      ]
    }
  },
  components:{
    LeftItem,
  }
}
</script>

<style lang="scss">
@import "@/assets/css/products/list.scss"
</style>