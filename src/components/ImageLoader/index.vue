<template>
  <div class='image-loader-container'>
      <!-- 这是一个占位图 -->
      <img v-if="!everythingDone" class="placeholder"  :src="placeholder" alt="" >
      <img @load="load" :style="{opacity:originOpacity,transition:`${duration}ms`}"  :src="src" alt="">
  </div>
</template>

<script>
export default {
    data(){
        return {
            originLoaded:false,// 原图是否加载完成
            everythingDone:false, // 是否一切都加载完成
        }
    },
    props:{
        src:{
            type:String,
            required:true
        },
        placeholder:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            default:500
        }
    },
    methods:{
        // 当图片加载完成执行这个方法
        load(){
            this.originLoaded = true;
            setTimeout(() => {
                this.everythingDone = true;
                this.$emit("load");// 给父组件抛出一个loadImage方法
            }, this.duration);
        }
    },
    computed: {
        originOpacity(){
            return this.originLoaded ? 1 : 0;
        }
    }
}
</script>

<style lang='less' scoped>
@import url("../../styles/mixin");
    .image-loader-container{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        img{
            .self-fill();
            object-fit: cover;
        }
        .placeholder {
            // 这个是将图片虚化
            filter: blur(2vw);
        }
    }
</style>