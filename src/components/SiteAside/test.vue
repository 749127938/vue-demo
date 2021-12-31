<template>
  <div class="test-container">
      <SiteAside/>
  </div>
</template>

<script>
import SiteAside from './'
export default {
    components:{
        SiteAside
    }
}
</script>

<style>
 .test-container {
     /* border-radius: 45px; */
     margin: 0 auto;
     margin-top:50px;
     width: 250px;
     height: 100%;
     background: #202020;
     box-sizing: border-box;
 }
</style>