<template>
  <div id="app">
    <AutoFitContainer>
      <section class="header">header</section>
      <section class="content">
        <section class="left">left</section>
        <section class="right">right</section>
      </section>
    </AutoFitContainer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.header {
  width: 1000px;
  height: 100px;
  background: #f00;
}
.content {
  display: flex;
  width: 1000px;
}
.left {
  width: 300px;
  height: 500px;
  background: #0f0;
}
.right {
  width: 700px;
  height: 500px;
  background: #ff0;
}
</style>
