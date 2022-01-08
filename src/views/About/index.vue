<template>
  <div v-loading="isLoading || Loading" class="about-container">
    <iframe @load="loading = true" class="about-iframe" :src="data" frameborder="0"></iframe>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
      loading:false
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