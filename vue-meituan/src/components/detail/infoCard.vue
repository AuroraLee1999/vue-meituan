<template>
  <div class="meishi-detail">
      <div class="d-left">
        <div class="detail-name">{{meishiDetail.title}}</div>
        <div class="detail-score">
          <el-rate v-model="meishiDetail.score" disabled text-color="#FF9900"></el-rate>
          <span class="meishi">{{meishiDetail.score}}分</span>
          <span class="meishi">人均¥{{meishiDetail.avgPrice}}</span>
        </div>
        <div class="detail-address">
          <p class="address meishi">地址：{{meishiDetail.address}}</p>
          <p class="phone meishi">电话：{{meishiDetail.phone}}</p>
          <p class="businessTime meishi">营业时间：{{meishiDetail.businessTime}}</p>
        </div>
      </div>
      <div class="d-right">
        <img :src="meishiDetail.imgUrl" alt="">
      </div>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data(){
    return{
      meishiDetail:{},
    }
  },
  created(){
    api.getDetailInfo().then(res=>{
      this.meishiDetail = res.data.data;
    })
  }
}
</script>

<style>

</style>