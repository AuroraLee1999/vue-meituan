<template>
  <div class="my-province">
    <span>按省份选择:</span>
    <my-select
      :value="province"
      title="省份"
      :itemList="provinceList"
      @changeActive="changeProvinceActive"
      :showPanelActive="provinceActive"
    />
    <my-select
      :value="city"
      title="城市"
      :itemList="cityList"
      @changeActive="changeCityActive"
      :showPanelActive="cityActive"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
    >
      <el-option v-for="item in searchList" :key="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MySelect from "@/components/changeCity/select.vue";
export default {
  components: {
    MySelect
  },
  data() {
    return {
      province: "省份",
      city: "城市",
      provinceList: ["山东", "甘肃", "江苏", "北京", "云南", "海南"],
      cityList: ["无锡", "南京", "苏州", "南通", "常州", "徐州", "扬州"],
      provinceActive: false,
      cityActive: false,
      searchWord: "",
      searchList: ["无锡", "南京", "苏州", "南通", "常州", "徐州", "扬州"]
    };
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod(){}
  }
};
</script>

<style>
</style>