<template>
  <div class="my-detail">
    <div class="my-crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>扬州美团</el-breadcrumb-item>
        <el-breadcrumb-item>扬州美食</el-breadcrumb-item>
        <el-breadcrumb-item>扬州烧烤烤串</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <info-card class="my-infocard" />
    <el-row>
      <el-col span="19">
        <my-youhui />
        <my-recommend />
        <my-comments />
      </el-col>
      <el-col span="5">
        <right-item></right-item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InfoCard from "@/components/detail/infoCard.vue";
import MyComments from "@/components/detail/comments.vue";
import MyRecommend from "@/components/detail/recommend.vue";
import MyYouhui from "@/components/detail/youhui.vue";
import RightItem from '@/components/products/rightItem.vue'
export default {
  components: {
    InfoCard,
    MyComments,
    MyRecommend,
    MyYouhui,
    RightItem
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/detail/index.scss";
</style>