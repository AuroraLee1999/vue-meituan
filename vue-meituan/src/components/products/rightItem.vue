<template>
  <div class="my-rightitem">
    <p class="fav">猜你喜欢</p>
    <ul class="right-item">
      <li v-for="(item, index) in rightList" :key="index">
        <img :src="item.imgUrl" />
        <p class="rightitem-name">{{item.name}}</p>
        <p class="rightitem-rate">
          <el-rate
            v-model="item.score"
            disabled
          ></el-rate>
          <span class="rightitem-com">{{item.commentNum}}个评价</span>
        </p>
        <p class="rightitem-address">{{item.address}}</p>
        <p class="rightitem-price">
          ¥
          <span>{{item.price}}</span>起
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightList: [
        {
          name: "东淮西川（万达店）",
          imgUrl:
            "https://p0.meituan.net/msmerchant/ac042fadf275b8518b4335ccf5bde2a7627284.jpg@380w_212h_1e_1c",
          score: 4,
          commentNum: 1275,
          address: "万达广场",
          price: "89.0"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/right.scss";
</style>