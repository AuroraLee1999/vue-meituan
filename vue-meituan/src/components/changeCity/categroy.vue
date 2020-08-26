<template>
  <div class="categroy">
    <dl class="my-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in alphabet" :key="item">{{item}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alphabet:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    };
  }
};
</script>

<style lang='scss'>
@import '@/assets/css/changecity/categroy.scss'
</style>