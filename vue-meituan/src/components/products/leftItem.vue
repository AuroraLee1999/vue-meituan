<template>
  <dl class="my-leftitem">
    <dt>
      <img :src="item.image" alt />
    </dt>
    <dd>
      <div class="info">
        <h3>{{item.title}}</h3>
        <p class="item-info">
          <el-rate v-model="item.score" disabled text-color="#ff9900"></el-rate>
          <span class="fontspan" v-if="item.score<=5&&item.score>4.5">很好</span>
          <span class="fontspan" v-else-if="item.score<=4.5&&item.score>4">好</span>
          <span class="fontspan" v-else-if="item.score<=4&&item.score>3.5">不错</span>
          <span class="fontspan" v-else-if="item.score<=3.5&&item.score>3">一般</span>
          <span class="fontspan" v-else>较差</span>
          <span class="fontspan">{{item.score}}分</span>
          <span class="my-leftitem-comment-total">{{item.commentNum}}人评论</span>
        </p>
        <div>
          <span class="tab">
            <span v-for="(tab, i) in item.tab" :key="tab">{{tab + (i < item.tab.length - 1?'|':'')}}</span>
          </span>
          <span class="address">{{item.address}}</span>
          <i class="el-icon-location"></i>
          <span class="map">查看地图</span>
        </div>
        <p>
          <span class="avgPrice">人均¥{{item.avgPrice}}</span>
        </p>
      </div>
      <div class="youhui">
        <ul class="item-youhui">
          <li v-for="youhuiItem in item.dealItems" :key="youhuiItem.title" class="items">
            <p class="you-title">{{youhuiItem.title}}</p>
            <p>
              <span class="my-leftitem-price">¥{{youhuiItem.price}}</span>
              <span class="youhui-old-price">门市价¥{{youhuiItem.counterPrice}}</span>
              <span class="youhui-sales">已售{{youhuiItem.saleNum}}</span>
            </p>
          </li>
        </ul>
        <p></p>
      </div>
    </dd>
  </dl>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["item"]
};
</script>

<style>
</style>