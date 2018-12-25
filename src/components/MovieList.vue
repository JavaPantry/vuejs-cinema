<template>
	<!--<div id="movie-list">
		<div v-for="movie in filteredMovies" class="movie">
			{{movie.movie.Title}}
		</div>
	</div>-->
	<div id="movie-list">
		<movie-item v-for="movie in filteredMovies"
		            class="movie"
		            v-bind:movie="movie">
		</movie-item>
	</div>

</template>
<script>
	import genres from '../util/genres'
	import MovieItem from './MovieItem.vue';

	export default {
		methods: {
			moviePassesGenreFilter(movie){
				if(!this.genre.length)
					return true
				return this.genre.find(genre => movie.genre === genre )
			}
		},
		computed:{
			filteredMovies(){
				return this.movies.filter(this.moviePassesGenreFilter)
			}
		},
		/*data() {
			return{
				movies: [
					{title:'Pulp Fiction', genre: genres.CRIME},
					{title:'Home alone', genre: genres.COMEDY},
					{title:'Austin Powers', genre: genres.COMEDY},
					{title:'God Father I', genre: genres.CRIME},
					{title:'God Father II', genre: genres.CRIME},
					{title:'Blue Planet', genre: genres.DOCUMENTARY},
					{title:'DRAMA Movie', genre: genres.DRAMA},
					{title:'HORROR Movie', genre: genres.HORROR}
				]}
		},*/
		props:['genre', 'time', 'movies'],
		components: {
			MovieItem
		}
	}
</script>