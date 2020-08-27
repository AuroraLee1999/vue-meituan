<template>
  <div class="my-panel">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item) in classicList" :key="item.type">
        <my-select :name="item.title" :list="item.sub_list"/>
      </dd>
    </dl>
    <hr/>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="areaitem in areaList" :key="areaitem.id">
        <my-select :name="areaitem.title" :list="areaitem.sub_list" />
      </dd>
    </dl>
  </div>
</template>

<script>
import MySelect from "@/components/products/selectItem.vue"
export default {
  data() {
    return {
      classicList: [
        {
          title: "美食",
          type: "food",
          sub_list: [
            {
              name:"全部",
              id: "all"
            },
            {
              name: "日本菜",
              id: "Japan"
            },
            {
              name: "烧烤烤串",
              id: ""
            },
            {
              name: "火锅",
              id: "hotpot"
            }
          ]
        }
      ],
      areaList: [
        {
          title: "广陵区",
          type: "guangling",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        },{
          title: "邗江区",
          type: "hanjiang",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        }
      ]
    };
  },
  components:{
    MySelect
  }
};
</script>

<style>
</style>