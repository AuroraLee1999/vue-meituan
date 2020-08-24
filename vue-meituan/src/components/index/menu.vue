<template>
  <div class="left-menu">
    <dl>
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index">
        <i :class="item.icon"></i>
        <span>{{item.title}}</span>
        <span class="arrow"></span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: "美食",
          icon: "food",
          children: [
            {
              childrenTitle: "美食",
              childrenList: [
                "代金券","甜点","饮品","火锅","自助餐","小吃","快餐","日韩料理","西餐","聚餐","宴请","烧烤","烤肉"
              ]
            }
          ]
        },
        {
          title: "外卖",
          icon: "takeout",
          children: [
            {
              childrenTitle: "外卖",
              childrenList: ["美团外卖"]
            }
          ]
        },
        {
          title: "酒店",
          icon: "hotel",
          children: [
            {
              childrenTitle: "酒店",
              childrenList: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>