<template>
  <div class="header">
    <div id="header-wrap" class="container">
      <div id="header-text"><span>My Todo!</span></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  background-color: #666;
}

#header-wrap {
  display: flex;
  height: 100%;
  justify-content: center;
}

#header-text {
  display: flex;
  height: 100%;
  align-items: center;
  color: #3cb4ff;
  font-size: 1.8rem;
  font-weight: 700;
}
</style>
