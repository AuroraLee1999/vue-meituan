<template>
  <div class="my-changecity">
      <el-row>
          <my-province />
      </el-row>
      <el-row>
          <my-hotcity title="热门城市："/>
      </el-row>
      <el-row>
          <my-hotcity title="最近访问："/>
      </el-row>
      <el-row>
          <my-categroy />
      </el-row>
  </div>
</template>

<script>
import MyProvince from "@/components/changeCity/province.vue"
import MyHotcity from "@/components/changeCity/hotCity.vue"
import MyCategroy from "@/components/changeCity/categroy.vue"
export default {
    components:{
        MyProvince,
        MyHotcity,
        MyCategroy
    }
}
</script>

<style>

</style>