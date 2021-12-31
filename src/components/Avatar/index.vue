<template>
  <img class="avatar-container" :src="url" :style="{width:size+'px',height:size+'px'}" >
</template>

<script>
export default {
    props:{
        url:{
            type:String,
            required:true
        },
        size:{
            type:Number,
            default:100// 这是一个默认属性
        }
    },
}
</script>

<style scoped>
 .avatar-container{
     border-radius: 50%;
     display: block;
     object-fit: cover;
 }
</style>