<template>
  <div class="my-card-header">
      <dl :class="nav">
          <dt>{{nav.title}}</dt>
          <dd v-for="(item,index) in nav.list" :key="index">{{item.text}}</dd>
      </dl>
  </div>
</template>

<script>
export default {
  props:["nav"]
}
</script>

<style lang="scss">
@import '@/assets/css/index/artistic.scss';
</style>