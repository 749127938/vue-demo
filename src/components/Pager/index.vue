<template>
  <div class="pager-container">
      <a @click="handlePageChange(1)" :class="{disabled:current==1}">|&lt;&lt;</a>
      <a @click="handlePageChange(current - 1)"  :class="{disabled:current==1}">&lt;&lt;</a>
      <a @click="handlePageChange(item)"  v-for="(item,i) in nums" :key="i" :class="{active:current == item}">{{item}}</a>
      <a @click="handlePageChange(current + 1)" :class="{disabled:current==totalPage}">&gt;&gt;</a>
      <a @click="handlePageChange(totalPage)" :class="{disabled:current==totalPage}">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
    props:{
        // 当前页码
        current:{
            type: Number,
            default:1
        },
        // 总数据量
        total:{
            type: Number,
            default:0
        },
        // 页容量
        limit:{
            type: Number,
            default:10
        },
        // 可见页码数
        visibleNumber:{
            type: Number,
            default:10
        },
    },
    // 这是一个计算属性
    computed:{
        // 页码总数
        totalPage(){
            // 由于可能有小数 所以我们选择向上取整
           return Math.ceil(this.total / this.limit);
        },
        // 最小页码
        minPage(){
            // 由于可见页码数可能除为小数 所以向上取整
            let min = this.current - Math.ceil(this.visibleNumber / 2);
            if(min < 1){
                // 如果min小于1 说明当前页码数暂时不用更新页码数据
                min = 1;
            }
            return min
        },
        // 最大页码数
        maxPage(){
            let max = this.minPage + this.visibleNumber - 1;
            if(max >this.totalPage){
                max = this.totalPage;
            }
            return max
        },
        // 这是页码数据
        nums(){
            let arr = [];
            for(let i = this.minPage;i<=this.maxPage;i++){
                //  //(i);
                arr.push(i);
            }
            return arr
        }
    },
    // 这是一个方法
    methods:{
        handlePageChange(newPage){
             //(newPage);
            this.$emit("changePage",newPage)
        }
    }
}
</script>

<style lang="less" scoped>
@import url("../../styles/color");
.pager-container{
    display:flex;
    justify-content: center;
    margin: 20px 0;
    a{
        color: @primary;
        margin: 0 6px;
        font-size: 20px;
        cursor: pointer;
        &.disabled{
            color: @lightWords;
        }
        &.active{
            color: @dark;
            cursor: text;
        }
    }
}
</style>