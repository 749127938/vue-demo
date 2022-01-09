<template>
  <div v-loading="isLoading" ref="projectContainer" class="project-container">
    <div v-for="item in data" :key="item.id" class="project-item">
      <a href="">
        <img v-lazy="item.thumb" class="thumb" :src="item.thumb" alt="">
      </a>
      <div class="info">
        <a href="">
          <h2>{{item.name}}</h2>
        </a>
        <p v-for="(desc,i) in item.description" :key="i">{{desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import mainScroll from "@/mixins/mainScroll"
export default {
  mixins:[mainScroll("projectContainer")],
  created(){
    console.log( this.$store.state);
    this.$store.dispatch("project/getProject")
  },
  computed: {
    ...mapState('project',{
      data:['data'],
      isLoading:['isLoading']
    })
  }
}
</script>

<style scoped lang="less">
  .project-container{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    .project-item{
      background:rgba(173,216,210,.1);
      transition: 0.5s;
      padding: 20px;
      display: flex;
      margin: 20px;
      margin-bottom: 20px;
      border-radius: 15px;
      &:hover{
        box-shadow: -1px 1px 5px lightblue;
        transform: scale(1.01) translate(3px, -3px);
        color: inherit;
      }
      .info{
        line-height:1.7;
        flex: 1 1 auto;
        h2{
          margin: 0;
        }
      }
      .thumb{
        width: 250px;
        min-height: 100%;
        border: 7px solid lightblue;
        flex: 0 0 auto;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius:15px;
        margin-right: 15px;
      }
    }
  }
</style>