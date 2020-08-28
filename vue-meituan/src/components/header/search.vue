<template>
  <div class="m-search">
    <el-row class="topbar-search">
      <el-col :span="6" class="left">
        <div>
          <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt />
        </div>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchInputValue"
            placeholder="搜索商家或地点"
            @focus="searchFocus()"
            @blur="searchBlur()"
            @input="searchInput()"
          ></el-input>
          <el-button class="el-icon-search"></el-button>
          <dl class="hotSuggest" v-if="isHotSuggest">
            <dt>热门推荐</dt>
            <dd class="hotSuggestItem" v-for="(item,index) in hotSuggest" :key="index">{{item}}</dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">{{item}}</dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link to="/s/火锅">火锅</router-link>
          <router-link to="/">烧烤</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchInputValue: "",
      hotSuggest: [],
      searchList: [],
      isFocus: false
    };
  },
  created() {
    api.searchHotSuggest().then(res => {
      this.hotSuggest = res.data.data;
    });
  },
  computed: {
    isHotSuggest: function() {
      return this.isFocus && !this.searchInputValue;
    },
    isSearchList: function() {
      return this.isFocus && this.searchInputValue;
    }
  },
  methods: {
    searchFocus() {
      this.isFocus = true;
    },
    searchBlur() {
      this.isFocus = false;
    },
    searchInput() {
      var data = this.searchInputValue;
      api.searchInputList().then(res=>{
        this.searchList = res.data.data.list.filter((item, index)=>{
          return item.indexOf(data)>-1;
        })
      })
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/public/header/search.scss";
</style>