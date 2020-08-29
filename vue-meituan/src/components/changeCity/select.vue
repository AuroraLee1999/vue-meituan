<template>
  <div :class="['choose-wrap', disabled?'disabled':'']" @click="showPanel" v-hidePanel="hidePanel">
    <div class="choose">
      <div>{{value}}</div>
      <i class="el-icon-caret-bottom" @click="showPanel"></i>
      <div :class="{'choose-content':true, 'active': showPanelActive}">
        <h2>{{value}}</h2>
        <div :class="['wrapper',className]">
          <div v-for="(itemList,index) in renderList" :key="index" :class="['panelCol',{'city-col':className =='city'}]">
            <span
              v-for="(item2, index) in itemList"
              :key="index"
              class="colItem"
              @click="changeValue(item2)"
            >{{item2.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: [
    "value",
    "itemList",
    "changeAvtive",
    "showPanelActive",
    "disabled",
    "className"
  ],
  methods: {
    showPanel(e) {
      e.stopPropagation(); //阻止事件冒泡
      // this.showPanelList = true;
      if (!this.disabled) {
        this.$emit("changeActive", true);
      }
    },
    hidePanel() {
      // this.showPanelList = false;
      this.$emit("changeActive", false);
      // console.log('hide-panel')
    },
    changeValue(item) {
      this.$emit("change", item);
      this.$emit("changeActive", false);
    }
  },
  computed: {
    renderList: function() {
      let col = Math.ceil(this.itemList.length / 12);
      let resultList = [];
      for (let i = 0; i < col; i++) {
        resultList.push(this.itemList.slice(i * 12, i * 12 + 12));
      }
      return resultList;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>