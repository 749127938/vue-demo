<template>
      <ul class="rightList-container">
          <li v-for="(item,i) in list" :key="i"  :class="{active:item.isSelect}">
               <span @click="handleChange(item)">{{item.name}}</span>
              <span @click="handleChange(item)" v-if="item.aside" class="aside">{{item.aside}}</span>
              <RightList :list="item.children" @changeSelect="handleChange(item)" />
          </li>
      </ul>
</template>

<script>
export default {
    // 如果找不到这个组件默认用这个
    name:'RightList',
    props: {
        list: {
            type:Array,
            default:()=>[]
        }
    },
    methods: {
        handleChange(item){
            if(!item.isSelect){
                // 把方法抛出给父组件使用
                this.$emit('changeSelect',item);
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
.rightList-container{
    margin: 0;
    list-style: none;
    .rightList-container{
        padding-left:1em;
    }
    li{
        // 设置最小高度为40px 如果不是设置的最小宽度则会重叠
        min-height: 40px;
        cursor: pointer;
        line-height: 40px;
        font-size: 14px;
        &.active{
            span{
color: @warn;
            }
            
            font-weight:bold;
        }
    }
}




</style>