<template>
  <div class="detail-youhui">
    <h3>商家团购及优惠</h3>
    <div v-if="$store.state.userName">
      <h5>2款堂食套餐</h5>
      
    </div>
    <div v-else>
      <img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="">
      <p>请登录后查看详情</p>
      <button>立即登录</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>