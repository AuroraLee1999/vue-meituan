<template>
  <div class="my-select">
    <dl class="tab">
      <dt>
        <span>{{name}}</span>
        <i class="el-icon-caret-bottom"></i>
      </dt>
      <dd>
        <p class="select-title">{{name}}</p>
        <span v-for="(item, index) in list" :key="index">
          {{item.name}}
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props:['name','list']
}
</script>

<style>

</style>