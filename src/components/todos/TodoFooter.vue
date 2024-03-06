<template>
  <div class="footer">
    <div id="footer-wrap">
      <div id="footer-text"><span>Todo exam</span></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  width: 100%;
  height: 70px;
  background-color: #333;
  position: relative;
  bottom: 0;
}

#footer-wrap {
  display: flex;
  height: 100%;
  justify-content: center;
}

#footer-text {
  display: flex;
  height: 100%;
  align-items: center;
  color: #eee;
  font-size: 0.8rem;
}
</style>
