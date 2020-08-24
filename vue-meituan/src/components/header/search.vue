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
          <el-input v-model="searchInput" placeholder="搜索商家或地点" @focus='searchFocus()' @blur="searchBlur()"></el-input>
          <el-button class="el-icon-search"></el-button>
          <dl class="hotSuggest" v-if="isHotSuggest" >
            <dt>热门推荐</dt>
            <dd v-for="(item,index) in hotSuggest" :key="index">{{item}}</dd>
          </dl>
          <dl class="searchList" v-if="isSearchList" >
              <dd v-for="(item,index) in searchList" :key="index">{{item}}</dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link to="/">火锅</router-link>
          <router-link to="/">烧烤</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput:"",
      hotSuggest: ["烤肉", "速8酒店", "海底捞"],
      searchList:["火锅","烤肉火锅","自助火锅"],
      isFocus:false,
    }
  },
  computed:{
      isHotSuggest:function(){
          return this.isFocus && !this.searchInput;
      },
      isSearchList:function(){
          return this.isFocus && this.searchInput;
      }
  },
  methods:{
      searchFocus(){
          this.isFocus = true;
      },
      searchBlur(){
          this.isFocus = false;
      }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/public/header/search.scss";
</style>