<template>
  <div class="categroy">
    <dl class="my-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in alphabet" :key="item">{{item}}</dd>
    </dl>
    <dl v-for="(item,index) in cityList" :key="index">
      <dt>{{item.initials}}</dt>
      <dd>{{item.cityName}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alphabet:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      cityList:[{
        cityName:"鞍山",
        initials:'A',
        abbr:"as",
        rank:"D"
      },{
        cityName:"北京",
        initials:'B',
        abbr:"bj",
        rank:"S"
      },{
        cityName:"成都",
        initials:'C',
        abbr:"cd",
        rank:"A"
      },{
        cityName:"广州",
        initials:'G',
        abbr:"gz",
        rank:"A"
      },{
        cityName:"扬州",
        initials:'Y',
        abbr:"yz",
        rank:"B"
      },{
        cityName:"南京",
        initials:'N',
        abbr:"nj",
        rank:"A"
      },{
        cityName:"重庆",
        initials:'C',
        abbr:"cq",
        rank:"A"
      },]
    };
  }
};
</script>

<style lang='scss'>
@import '@/assets/css/changecity/categroy.scss'
</style>