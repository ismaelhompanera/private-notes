<template>
  <div id="app">
    <section class="appnotes-content">
      <router-view></router-view>
    </section>
    <notifications group="notifications" />
  </div>
</template>

<script>

</script>

<style lang="scss">
.appnotes-content {
  height: 100%;
  width: 100%;
}
</style>
