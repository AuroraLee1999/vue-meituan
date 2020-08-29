<template>
  <div class="categroy">
    <dl class="my-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in alphabet" :key="item">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl v-for="(item, index) in cityGroup" :key="index" class="my-categroy-section" :id="'city-'+index">
      <dt>{{index}}</dt>
      <dd >
        <span v-for="(city, index) in item" :key="index" >{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityGroup: {}
    };
  },
  // created() {
  //   var cityList = [
  //     {
  //       cityName: "鞍山",
  //       pinyin: "anshan",
  //       initials: "A",
  //       abbr: "as",
  //       rank: "D"
  //     },
  //     {
  //       cityName: "北京",
  //       pinyin: "beijing",
  //       initials: "B",
  //       abbr: "bj",
  //       rank: "S"
  //     },
  //     {
  //       cityName: "成都",
  //       pinyin: "chengdu",
  //       initials: "C",
  //       abbr: "cd",
  //       rank: "A"
  //     },
  //     {
  //       cityName: "广州",
  //       pinyin: "guangzhou",
  //       initials: "G",
  //       abbr: "gz",
  //       rank: "A"
  //     },
  //     {
  //       cityName: "扬州",
  //       pinyin: "yangzhou",
  //       initials: "Y",
  //       abbr: "yz",
  //       rank: "B"
  //     },
  //     {
  //       cityName: "南京",
  //       pinyin: "nanjing",
  //       initials: "N",
  //       abbr: "nj",
  //       rank: "A"
  //     },
  //     {
  //       cityName: "重庆",
  //       pinyin: "chongqing",
  //       initials: "C",
  //       abbr: "cq",
  //       rank: "A"
  //     },
  //     {
  //       cityName: "上海",
  //       pinyin: "shanghai",
  //       initials: "S",
  //       abbr: "sh",
  //       rank: "S"
  //     }
  //   ];
  //   var cityObj = {};
  //   cityList.forEach((item, index) => {
  //     if (!cityObj[item.initials]) {
  //       cityObj[item.initials] = [];
  //     }
  //     cityObj[item.initials].push(item);
  //   });
  //   this.cityGroup = cityObj;
  // },
  created(){
    api.getCategroyCity().then(res=>{
      var cityList = res.data.data;
      var cityObj = {};
      cityList.forEach((item, index) => {
        if(!cityObj[item.firstChar]){
          cityObj[item.firstChar.toUpperCase()] = [];
        }
        cityObj[item.firstChar.toUpperCase()].push(item);
      });
      this.cityGroup = cityObj;
    })
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/categroy.scss";
</style>