<template>
  <div class="blogcategroy-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @changeSelect="changeSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/featchData";
import {getBlogType} from '@/api/blog.js'
export default {
  mixins:[fetchData([])],
  components:{
    RightList
  },
  computed: {
    categoryId(){
      return +this.$route.params.categoryId || -1;
    },
    list(){
      const articleCountTotal = this.data.reduce((a,b)=>a + b.articleCount,0)
      const result = [{name:'全部分类',id:-1,articleCount:articleCountTotal},...this.data]
      return result.map(it=>({
        ...it,
        isSelect:it.id == this.categoryId,
        aside:`${it.articleCount}篇`
      }))
    },
    limit(){
      return +this.$route.query.limit || 10;
    }
  },
  methods:{
    async fetchData(){
       const resp = await getBlogType();
      return resp
    },
    changeSelect(item){
       //(item);
      const query = {
          page:1,
          limit:this.limit
        }
      // item.isSelect = true;
         if(item.id === -1){
          // /article?page=${newPage}&limit=${this.routeInfo.limit}
          this.$router.push({
            name:'Blog',
            query,
          })
        }else{
          // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
          this.$router.push({
            name:'CategoryBlog',
            query,
            params:{
              categoryId:item.id
            }
          })
        }
    }
  }
}
</script>

<style lang="less" scoped>
.blogcategroy-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>