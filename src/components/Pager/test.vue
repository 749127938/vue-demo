<template>
<div>
  <h1>这是我的组件库测试页面</h1>
  <!-- 这里的$event是子组件传递过来的事件对象 -->
  <Pager :total="500" @changePage="handlePageChange($event)" :current="currents" />
</div>
</template>

<script>
  import Pager from "./index.vue";// 导入分页组件
  export default {
    components: {
      Pager,// 注册分页组件
    },
    // 由于不能直接更改props的数据 得用data
    data(){
      return {
        currents:1,
      }
    },
    methods: {
      handlePageChange(newPage){
        // 当改变页码后的操作
        this.currents = newPage;
      }
    }
  }
</script>

<style scoped>

</style>