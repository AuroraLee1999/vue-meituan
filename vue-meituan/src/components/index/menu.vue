<template>
  <div class="left-menu" @mouseleave="itemLeave()">
    <dl>
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="itemEnter(item)" >
        <i :class="item.type"></i>
        <span>{{item.name}}</span>
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="menuItem" v-if="subList">
      <dl v-for="(subItem, subIndex) in subList.items" :key="subIndex">
        <dt>{{subItem.title}}</dt>
        <dd v-for="(item3, index) in subItem.items" :key="index">{{item3}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      menuList:[],
      subList:null,
    };
  },
  created(){
    api.getRightNav().then(res=>{
      // console.log(res.data.data)
      this.menuList = res.data.data;
    })
  },
  methods:{
    itemEnter(item){
      this.subList = item;
      // console.log(this.subList);
    },
    itemLeave(){
      var self = this;
      this.timer = setTimeout(() => {
        self.subList = null;
      }, 200);
    }
  }
};
</script>

<style>
</style>