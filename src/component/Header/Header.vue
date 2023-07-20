<script>
export default {
  name: "Header"
}
</script>

<template>
  <header>
    <div class="left" v-if="$slots['left']">
      <slot name="left"></slot>
    </div>
    <div class="right" v-if="$slots['right']">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<style scoped>
header {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #003d88;
  padding: 0 10px;
  box-sizing: border-box;
}

header .left {
  position: relative;
  float: left;
  height: 100%;
}

header .right {
  position: relative;
  float: right;
  height: 100%;
}
</style>
