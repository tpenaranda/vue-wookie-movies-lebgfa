<template>
  <div id="app">
    <b-container class="header" fluid>
      <b-row class="py-2" align-v="center">
        <b-col sm="5" class="">
          <h1 class="">Wookie Movies</h1>
        </b-col>
        <b-col><b-spinner v-if="searchInProgress" class="mb-1" label="Spinning"></b-spinner></b-col>
        <b-col v-if="this.$router.currentRoute.name === 'home'" sm="5" style="vertical-align: middle; display: table;">
          <label for="type-text"></label>
          <input @input="searchInput" id="type-text" type="text" class="ml-3" placeholder="Search...">
        </b-col>
      </b-row>
    </b-container>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    searchInProgress: false,
    inputTimeout: null
  }),
  methods: {
    searchInput(input) {
      if (this.inputTimeout) {
        clearTimeout(this.inputTimeout);
      }

      return this.inputTimeout = setTimeout(() => {
        this.searchInProgress = true
        this.axios.get(`https://wookie.codesubmit.io/movies?q=${input.target.value}`).then((response) => {
          this.$root.$parseMovies(response.data.movies)
        }).finally(() => this.searchInProgress = false)
      }, 1000);
    }
  }
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
    background-color: #ddd;
    display: table-cell;
    vertical-align: middle;
  }
</style>
