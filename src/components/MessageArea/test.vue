<template>
  <div class="test-container">
      <MessageArea/>
  </div>
</template>

<script>
import MessageArea from "./"
export default {
    components: {
        MessageArea
    }
}
</script>

<style scoped lang="less">
.test-container{
    width: 600px;
    height:100%;
    border: 1px solid;
    margin: 0 auto;
}
</style>