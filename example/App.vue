<template>
  <scroll-page></scroll-page>
</template>

<script>

import ScrollPage from "@/layout/ScrollPage";

export default {
  name: "Example",
  components: {ScrollPage},
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
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>