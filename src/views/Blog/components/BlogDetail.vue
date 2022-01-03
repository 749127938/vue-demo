<template>
  <div v-if="blog" class="blog-detail-container">
      <h1>{{blog.title}}</h1>
      <div class="aside">
          <span>日期：{{formatDate(blog.createDate)}}</span>
          <span>浏览：{{blog.scanNumber}}</span>
          <a href="#data-form-container">评论：{{blog.commentNumber}}</a>
          <RouterLink :to="{
            name:'CategoryBlog',
            params:{
              categoryId:blog.category.id
            }
          }">{{ blog.category.name }}</RouterLink>
      </div>
      <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import "@/styles/markdown.css"
import "highlight.js/styles/github.css";
import {formatDate} from "@/utils"
export default {
    props: {
        blog: {
            default:[],
        }
    },
    methods:{
        formatDate,
    },
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
.markdown-body {
  margin: 2em 0;
}
</style>