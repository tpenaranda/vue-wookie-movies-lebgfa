<template>
  <div id="app">
    <div class="header">
      <h1 class="text-left pl-5">Wookie Movies</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
    body {
      height: unset;
    }
    .loading {
        visibility: hidden;
    }
    .header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1;
      height: 5em;
      padding-top: .75em;
      background-color: #fff;
    }
</style>
