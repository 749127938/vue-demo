<template>
  <div class="test-container">
    <Layout>
    <template #left>
        <div class="left">
            这是左边
        </div>
    </template>
    <template #main>
        <div class="main">
            这是中间
        </div>
    </template>
    <template v-slot:right>
        <div class="right">
            这是右边
        </div>
    </template>
  </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang='less'>
.test-container {
  width: 100%;
  height: 600px;
  // border: 2px solid;
  margin: 0 auto;
  white-space: nowrap;
}
.left {
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.main {
  width: 100%;
  height: 100%;
  background: lightseagreen;
}
.right {
  width: 0;
  height: 100%;
  background: lightblue;
}
</style>
