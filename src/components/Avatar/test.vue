<template>
<div>
  <h1>这是我的测试组件库</h1>
  <Avatar url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c" :size="50" />
</div>
</template>

<script>
  import Avatar from "./index.vue";// 导入头像组件
  export default {
    components: {
      Avatar,// 注册头像组件
    },
  }
</script>

<style scoped>
.iconfont{
  color: #fac;
  font-size:50px;
}
</style>