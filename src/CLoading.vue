<template>
  <div class="loading">
    <div class="animate">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CLoading'
}
</script>

<style scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
}

.animate {
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 40px);
  width: 80px;
  height: 40px;
}

.animate span {
  display: inline-block;
  width: 8px;
  height: 100%;
  border-radius: 4px;
  background: lightgreen;
  -webkit-animation: load 1s ease infinite;
  margin: 0 4px;
}

@-webkit-keyframes load {
  0%, 100% {
    height: 40px;
    background: lightgreen;
  }
  50% {
    height: 70px;
    margin: -15px 0;
    background: lightblue;
  }
}

.animate span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
}

.animate span:nth-child(3) {
  -webkit-animation-delay: 0.4s;
}

.animate span:nth-child(4) {
  -webkit-animation-delay: 0.6s;
}

.animate span:nth-child(5) {
  -webkit-animation-delay: 0.8s;
}
</style>
