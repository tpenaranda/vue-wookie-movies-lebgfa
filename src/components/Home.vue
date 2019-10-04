<template>
  <div class="home">
    <b-container class="movie-row" fluid>
      <b-row class="justify-content-md-center">
        <b-col md="auto" v-for="movie in $root.movies" v-bind:key="movie.id" class="movie-column">
          <b-card
            :title="movie.title"
            :img-src="movie.poster"
            :img-alt="movie.slug"
            img-top
            tag="article"
            style="min-width: 220px; max-width: 320px; height: 100%; padding: .25em; margin: .5em auto auto auto;"
            class="mb-2"
          >
            <b-card-text>
              {{ movie.overview | truncate(220, '...') }}
            </b-card-text>
            <router-link :to="{name: 'detail', params: { movie: movie.slug }}">
              <b-button pill variant="outline-info">O</b-button>
            </router-link>
          </b-card>
        </b-col>
        <b-col v-if="!$root.movies.length"><h3 class="text-white pt-5">No movies found.</h3></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  filters: {
    truncate: (text, length, ending) => {
      return text.substring(0, length) + ending;
    }
  }
}
</script>

<style scoped>
  h1 {
    color: #FFF;
    padding: 1em;
  }
  .movie-row {
    width: 100%;
    padding-top: 6.5em;
  }
  .movie-column {
    padding: 1em;
  }
</style>
