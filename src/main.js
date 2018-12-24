import Vue from 'vue'
import './style.scss'
import genres from './util/genres'

new Vue({
	el: '#app',
	data(){
		return {
			genre:[],
			time:[]
		}
	},
	methods: {
		checkFilter( category, title, checked){
			console.log('Root on checkFilter event' , category, title, checked)
			if(checked){
				this[category].push(title)
			}else{
				let index = this[category].indexOf(title);
				if (index === -1)
					return
				this[category].splice(index,1);
			}
		}
	},
	components: {
		'movie-list': {
			template: `<div id="movie-list">
							<div v-for="movie in filteredMovies" class="movie">
								{{movie.title}}
							</div> 
                       </div>`,
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
			data() {
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
			},
			props:['genre', 'time']
		},
		'movie-filter': {
			data(){
				return {
					genres
				}
			},
			template: `<div id="movie-filter"> 
							<h2>Filter results</h2>
							<div class="filter-group">
								<check-filter 
									v-for=" genre in genres " 
									v-bind:title="genre"
									v-on:check-filter="checkFilter"></check-filter>
							</div>
							
					   </div>`,
			methods: {
				checkFilter(category, title, checked){
					console.log('on checkFilter event')
					this.$emit('check-filter', category, title, checked)
				}
			},
			components: {
				'check-filter':{
					data(){
						return{
							checked: false
						}
					},
					template: `<div v-bind:class="{'check-filter':true, active:checked}"  v-on:click="checkFilter">
									<span class="checkbox"></span>
									<span class="check-filter-title">{{title}}</span>
							   </div>`,
					props: [ 'title' ],
					methods: {
						checkFilter(){
							this.checked = !this.checked
							this.$emit('check-filter', 'genre', this.title, this.checked )
						}
					}
				}
			}
		}
	}
})