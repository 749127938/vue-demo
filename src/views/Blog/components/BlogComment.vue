<template>
  <div class="blog-comment-container">
    <MessageArea title="评论列表" subTitle="" :list="data.rows" :isListLoading="isLoading"/>
  </div>
</template>

<script>
import fetchData from "@/mixins/featchData"
import MessageArea from "@/components/MessageArea"
import {getBlogComment} from "@/api/blog.js"
export default {
    components: {
        MessageArea,
    },
    mixins:[fetchData({total:0,rows:[]})],
    data(){
      return{
        page:1,
        limit:10
      }
    },
    methods: {
      async fetchData(){
        return await getBlogComment(this.$route.params.id,this.page,this.limit)
      }
    }
}
</script>

<style>

</style>