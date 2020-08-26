<template>
  <div class="choose-wrap" @click="showPanel" v-hidePanel="hidePanel">
    <div class="choose">
      <div>{{value}}</div>
      <i class="el-icon-caret-bottom" @click="showPanel"></i>
      <div :class="{'choose-content':true, 'active': showPanelActive}">
      <h2>{{value}}</h2>
      <div v-for="(item,index) in itemList" :key="index" class="panelItem">
          <div>{{item}}</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:[
        'value',
        'itemList',
        'changeAvtive',
        'showPanelActive'
    ],
    methods:{
        showPanel(e){
            e.stopPropagation();//阻止事件冒泡
            // this.showPanelList = true;
            this.$emit('changeActive', true)
        },
        hidePanel(){
            // this.showPanelList = false;
            this.$emit('changeActive', false)
            // console.log('hide-panel')
        }
    }
};
</script>

<style lang="scss">
@import '@/assets/css/changecity/select.scss'
</style>