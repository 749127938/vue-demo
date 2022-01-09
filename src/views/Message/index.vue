<template>
  <div ref="mesgContainer" class="mesg-container">
    <MessageArea title="留言板" :isListLoading="isLoading" :subTitle="`(${data.total || 0})`" :list="data.rows" @submit="handleSubmit"/>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/featchData";
import mainScroll from "@/mixins/mainScroll";
import {getMesg,postMesg} from "@/api/mesg";
export default {
  mixins: [fetchData([]),mainScroll('mesgContainer')],
  data(){
    return {
      page:1,
      limit:10,
    }
  },
  components: {
    MessageArea,
  },
  computed: {
      hasMore(){
        return this.data.rows.length < this.data.total;
      }
    },
  methods: {
    async fetchData(){
      const resp = await getMesg();
      console.log(resp);
      return resp
    },
    async handleSubmit(item,callback) {
      const resp = await postMesg(item);
      this.data.rows.unshift(resp);
      this.data.total ++;
      callback('留言成功')
      console.log(item,resp,this.data);
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

<style scoped lang="less">
  .mesg-container{
    width: 100%;
    height: 100%;
    padding:20px 0;
    box-sizing: border-box;
    overflow-y:scroll ;
    scroll-behavior: smooth;
  }
  .message-area-container {
    width: 700px;
    margin: 0 auto;
  }
</style>