<template>
  <div class="my-province">
    <span>按省份选择:</span>
    <my-select
      :value="province"
      title="省份"
      :itemList="provinceList"
      @changeActive="changeProvinceActive"
      :showPanelActive="provinceActive"
      @change="changeProvince"
      className="province"
    />
    <my-select
      :value="city"
      title="城市"
      :itemList="cityList"
      @changeActive="changeCityActive"
      :showPanelActive="cityActive"
      :disabled="cityDisabled"
      @change="changeCity"
      className="city"
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
      <el-option v-for="item in searchList" :key="item.id" :value="item.name"></el-option>
    </el-select>
  </div>
</template>

<script>
import MySelect from "@/components/changeCity/select.vue";
import api from "@/api/index.js"
export default {
  components: {
    MySelect
  },
  data() {
    return {
      province: "省份",
      city: "城市",
      provinceList: [],
      cityList: [],
      provinceActive: false,
      cityActive: false,
      searchWord: "",
      searchList: [],
      cityDisabled:true,
    };
  },
  created(){
    api.getProvinceList().then(res=>{
      // console.log(res.data.data.cityInfoList);
      this.provinceList = res.data.data.map(item=>{
        item.name = item.provinceName;
        return item;
      })
    })
    api.getRecentCity().then(res=>{
      this.searchList = res.data.data;
    })
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
    changeProvince(item){
      this.province = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
    },
    changeCity(){}
  }
};
</script>

<style lang="scss">
@import '@/assets/css/changecity/iselect.scss'
</style>