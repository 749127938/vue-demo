<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink :to="{
            name:'Detail',
            params:{
              id: item.id
            }
          }">
            <img
              v-lazy="item.thumb"
              :alt="item.title"
              :title="item.title"
            />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink :to="{
            name:'Detail',
            params:{
              id: item.id
            }
          }">
            <h2>{{item.title}}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{formatDate(item.createDate)}}</span>
            <span>浏览：{{item.scanNumber}}</span>
            <span>评论：{{item.commentNumber}}</span>
            <RouterLink :to="{
            name:'CategoryBlog',
            params:{
              categoryId: item.category.id
            }
          }" class="">{{item.category.name}}</RouterLink>
          </div>
          <div class="desc">
            {{item.description}}
          </div>
        </div>
      </li>
    </ul> 
    <!-- 分页放到这里 -->
    <Pager :total="data.total" :current="routerInfo.page" :limit="routerInfo.limit" @changePage="handlePageChange" v-if="data.total" />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import {getBlog} from '@/api/blog.js'
import fetchData  from '@/mixins/featchData';
import mainScroll  from '@/mixins/mainScroll';
import {formatDate} from '@/utils';
export default {
  mixins:[fetchData ({}),mainScroll('container')],
    components: {
      Pager,
    },
    methods: {
      handlePageChange(newPage){
        const query = {
          page:newPage,
          limit:this.routerInfo.limit
        }
        // 点击页码之后做的事情
        if(this.routerInfo.categoryId == -1){
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
              categoryId:this.routerInfo.categoryId
            }
          })
        }
      },
      formatDate,
      async fetchData (){
          return await getBlog(this.routerInfo.page,this.routerInfo.limit,this.routerInfo.categoryId)
      },
    },
    computed: {
      routerInfo(){
         // 获取路由信息 并且把数据换成Number
         const categoryId = +this.$route.params.categoryId || -1;
         const page = +this.$route.query.page || 1;
         const limit = +this.$route.query.limit || 10;
        return {
          categoryId,
          page,
          limit
        }
      }
    },
    watch:{
     async $route(){
        // 路由变化后要做的事情
        this.isLoading = true;
        this.$refs.container.scrollTop = 0
        this.data = await this.fetchData();
        this.isLoading = false;
      }
    },
}
</script>

<style scoped lang="less">
@import "~@/styles/color.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
