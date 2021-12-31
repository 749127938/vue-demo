<template>
  <div class="blogTOC">
      <h1>目录</h1>
      <RightList @changeSelect="changeSelect" :list="data"/>
  </div>
</template>

<script>
import RightList from "./RightList"
export default {
    props: {
        data:{
            type:Array,
            default:()=>[],
        }
    },
    methods: {
        changeSelect(item){
            console.log(location.hash+"#" + item.anchor);
            // this.#router.push(`#${data.toc.anchor}`)
            location.hash = item.anchor;
        },
    },
    components: {
        RightList,
    }
}
</script>

<style>

</style>