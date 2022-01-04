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
        const resp = await postBlog({
          blogId:this.$route.params.id,
          ...item,
        });
        this.data.rows.unshift(resp)
        this.data.total ++;
        callback('评论成功');
      },
      async handleMore(){
        if(!this.hasMore){
          return;
        }
        this.isLoading = true;
        this.page ++;
        const resp = await this.fetchData();
        this.isLoading = false;
        this.data.total = resp.total;
        this.data.rows = this.data.rows.concat(resp.rows)
      },
      scrollHeight(dom){
        // 表示正在加载 就不用重新加载了
        if(this.isLoading || !dom){
          return;
        }
        const range = 100;// 在一个可控范围 到达了这个范围就相当于到达了底部 
        const desc = Math.abs(dom.scrollTop+dom.clientHeight-dom.scrollHeight);
        if(range > desc){
          this.handleMore();
        }
        
      }
    },
    computed: {
      hasMore(){
        return this.data.rows.length < this.data.total;
      }
    },
    // 组件创建时监听mainscroll事件
    created(){
      this.$bus.$on('mainscroll',this.scrollHeight);
    },
    // 组件销毁之后取消监听
    destroyed(){
      this.$bus.$off('mainscroll');
    }
}
</script>

<style>

</style>