<template>
  <div v-loading="isLoading " class="about-container">
    <iframe @load="loading = false" class="about-iframe" :src="data" frameborder="0"></iframe>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
      loading:true
    }
  },
  created(){
    this.$store.dispatch('about/fetchAbout')
  },
  computed: {
    ...mapState('about',{
      data:'data',
      isLoading:'isLoading',
    })
  }
}
</script>

<style scoped lang='less'>
.about-container{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .about-iframe{
    width: 100%;
    height: 100%;
  }
}
</style>