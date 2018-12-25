<template>
	<div id="movie-list">
		<movie-item v-for="movie in filteredMovies"
		            v-bind:movie="movie.movie">
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
		props:['genre', 'time', 'movies'],
		components: {
			MovieItem
		}
	}
</script>