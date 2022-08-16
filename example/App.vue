<template>
  <scroll-page :size="3" scrollbar>
    <template #page1>
      <div style="background-color: bisque; height: 100%">
        page1
      </div>
    </template>
    <template #page2>
      <div style="background-color: olivedrab; height: 100%">
        page2
      </div>
    </template>
    <template #page3>
      <div style="background-color: blue; height: 100%">
        page3
      </div>
    </template>
    <template #footer>
      <div style="background-color: red; height: 300%">
        <p v-for="n in 100">{{ n }}</p>
      </div>
    </template>
  </scroll-page>
</template>

<script>

import ScrollPage from "@/layout/ScrollPage.vue"

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
  height: 100%;
  width: 100%;
}
</style>