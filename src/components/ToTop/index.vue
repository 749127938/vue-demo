<template>
  <div @click="handleScrollTop" v-show="show" class="to-top-container">
      top
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: false,
    }
  },
  // 监听滚动条
  created(){
    this.$bus.$on('mainscroll',this.handleScroll)
  },
  destroyed(){
    this.$bus.$off('mainscroll')
  },
  methods: {
    handleScroll(dom){
      if(!dom){
        // 没有这个元素说明不用处理
        this.show =false;
        return;
      }
      // 当滚动大于元素高度时显示
      this.show = dom.clientHeight<dom.scrollTop;
    },
    handleScrollTop(){
      this.$bus.$emit('setMainScroll',0);
    }
  }
}
</script>

<style scroll lang='less'>
@import url("~@/styles/color.less");
.to-top-container{
    width: 50px;
    height: 50px;
    position:fixed;
    right: 50px;
    bottom: 50px;
    border-radius:50%;
    background:@primary;
    line-height: 50px;text-align:center;
    color: #fff;
    cursor: pointer;
}
</style>