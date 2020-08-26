<template>
  <div class="my-card-header">
    <dl :class="nav.name" @mouseover="showCard">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["nav"],
  data() {
    return {
      kind: "hot"
    };
  },
  methods: {
    showCard(e) {
      // console.log(e.target);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute('data-type');
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>