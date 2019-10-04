<template>
  <div class="detail" :style="`background-image: linear-gradient(to bottom, rgba(0,0,0,0.75) 0%,rgba(0,0,0,0.6) 100%), url(${movie.backdrop}); background-size: cover; height: 100vh`">
    <b-container class="detail-row" fluid>
      <b-row class="mx-2 px-1 my-1 py-4 border border-light">
        <b-col sm="4" align-self="center">
            <b-img :src="movie.poster" fluid alt="Movie poster" class="p-2"></b-img>
        </b-col>
        <b-col sm="8">
            <p class="text-left p-3 display-4">{{ movie.title }}</p>

            <p class="text-left pl-3 pt-2 m-0"><i>IMDB Rating:</i> {{ movie.imdb_rating }}</p>
            <p class="text-left pl-3 m-0"><i>Year:</i> {{ movie.released_on | moment('YYYY') }}</p>
            <p class="text-left pl-3 pb-5 m-0"><i>Classification:</i>  {{ movie.classification }}</p>

            <p class="text-center">{{ movie.overview }}</p>
        </b-col>
      </b-row>
    </b-container>
    <router-link to='/'>
      <b-button pill variant="warning" class="mt-5">Back</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  created () {
    this.movie = this.$root.movies.find((i) => i.slug === this.$route.params.movie)
    if (!this.movie) {
        this.$router.push('/')
    }
  },
  data: () => ({
    movie: null
  })
}
</script>

<style scoped>
  .detail-row {
    color: #fff;
    padding-top: 10em;
    max-width: 1240px;
  }
</style>
