<template>
  <div class="blog-comment-container">
    <MessageArea title="评论列表"
     :subTitle="`(${data.total})`"
     :list="data.rows" 
     :isListLoading="isLoading" 
     @submit="handleSubmit"/>
  </div>
</template>

<script>
import fetchData from "@/mixins/featchData"
import MessageArea from "@/components/MessageArea"
import {getBlogComment,postBlog} from "@/api/blog.js"
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
      },
      async handleSubmit(item,callback){
        console.log(this.$route.params.id);
        const resp = await postBlog({
          blogId:this.$route.params.id,
          ...item,
        });
        this.data.rows.unshift(resp)
        this.data.total ++;
        callback('评论成功');
        console.log(resp);
      }
    }
}
</script>

<style>

</style>