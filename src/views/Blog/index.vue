<template>
  <!-- <h1>文章{{$route.params.CategoryId}}</h1> -->
  <Layout>
      <BlogList/>
  <template #right>
  <BlogCateGroy/>
  </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList";
import BlogCateGroy from "./components/BlogCateGroy";

export default {
  created(){
    // $route为路由地址
    // $router为路由信息
    // console.log(this.$route);
  },
  components:{
    Layout,
    BlogList,
    BlogCateGroy
  }
}
</script>

<style>

</style>