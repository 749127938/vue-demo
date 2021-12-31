<template>
  <div class="test-contaniner">
      <ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
    placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
/>
  </div>
</template>

<script>
import ImageLoader from "./"
export default {
    components: {
        ImageLoader
    }
}
</script>

<style>
 .test-contaniner{
     width: 600px;
     height: 400px;
     border: 1px solid black;
     margin: 0 auto;
 }
</style>