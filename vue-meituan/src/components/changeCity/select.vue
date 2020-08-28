<template>
  <div class="choose-wrap" @click="showPanel" v-hidePanel="hidePanel">
    <div class="choose">
      <div>{{value}}</div>
      <i class="el-icon-caret-bottom" @click="showPanel"></i>
      <div :class="{'choose-content':true, 'active': showPanelActive}">
      <h2>{{value}}</h2>
      <div v-for="(itemList,index) in renderList" :key="index" class="panelItem">
          <span v-for="(item2, index) in itemList" :key="index">{{item2.name}}</span>
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
    },
    computed:{
        renderList:function(){
            let col = Math.ceil(this.itemList.length / 12);
            let resultList = [];
            for(let i = 0; i < col; i++){
                resultList.push(this.itemList.slice(i * 12, i* 12+12))
            }
            return resultList;
        }
    }
};
</script>

<style lang="scss">
@import '@/assets/css/changecity/select.scss'
</style>