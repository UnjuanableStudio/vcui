<template>
  <!--  <test-scroll-page></test-scroll-page>-->
  <!--  <unj-ellipse-mask :width="500" :height="800" color="rgba(0,0,0,0.5)"></unj-ellipse-mask>-->
  <unj-image src="/images/jiangxi.jpega" :width="500" :height="500"></unj-image>
</template>

<script>
import TestScrollPage from "./components/TestScrollPage.vue";

export default {
  name: "Example",
  components: {TestScrollPage},
  setup() {

  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
}

#app {
  height: 100%;
  width: 100%;
  background-color: blanchedalmond;
}
</style>