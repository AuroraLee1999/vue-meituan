<template>
  <div class="my-products">
      <el-row class="my-crumbs">
          <my-crumb />
      </el-row>
      <el-row>
          <el-col :span="19" >
              <el-row>
                  <my-selectpanel />
              </el-row>
              <el-row>
                  <my-list /> 
              </el-row>
          </el-col>
          <el-col :span="5">
              <el-row>
                  <img class="mapImg" src="@/assets/img/map.png" alt="">
                  <my-rightitem />
              </el-row>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import MyCrumb from "@/components/products/crumb.vue"
import MyRightitem from "@/components/products/rightItem.vue"
import MySelectpanel from "@/components/products/selectPanel.vue"
import MyList from "@/components/products/list.vue"
export default {
    components:{
        MyCrumb,
        MyRightitem,
        MySelectpanel,
        MyList
    }
}
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss"
</style>