<template>
  <Layout>
    <div ref="mainContainer" v-loading="isLoading" class="main-container">
      <BlogDetail :blog="data" />
      <BlogComment v-if="!isLoading"/>
    </div>
  <template #right>
    <div class="right-container" v-if="data" v-loading="isLoading">
          <BlogTOC :toc="data.toc"/>
          <!-- <BlogComment/> -->
    </div>
  </template>
  </Layout >
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import featchData from "@/mixins/featchData";
import {getBlogId} from "@/api/blog";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";

export default {
  mixins:[featchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData(){
      return await getBlogId()
    },
    handleScroll(){
      // 触发事件
      this.$bus.$emit("mainscroll",this.$refs.mainContainer)
    }
  },
  mounted(){
    // 给容器注册一个滚动条事件
    this.$refs.mainContainer.addEventListener('scroll',this.handleScroll)
  },
  // 组件销毁时事件也要注销掉
  destoryed(){
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
  // 当页面刷新之后更新到锚点位置
  updated(){
      const hash = location.hash;
      console.log(hash);
      location.hash = "";
      setTimeout(()=>{
          location.hash = hash;
      },10)
  },
}
</script>

<style scoped>
  .main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>