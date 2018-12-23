import Vue from 'vue'
import './style.scss'
import genres from './util/genres'

new Vue({
	el: '#app',
	components: {
		'movie-list': {
			template: `<div id="movie-list">
							<div v-for="movie in movies" class="movie">
								{{movie.title}}
							</div> 
                       </div>`,
			data() {
				return{
				movies: [
					{title:'Pulp Fiction'},
					{title:'Home alone'},
					{title:'God Father I'},
					{title:'God Father II'},
				]}
			}
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
								<check-filter somedata="Filter name" v-for="genre in genres"></check-filter>
							</div>
							
					   </div>`,
			components: {
				'check-filter':{
					template: `<div> Filter {{somedata}}</div>`,
					props: [ 'somedata' ]
				}
			}
		}
	},
	data:{}
})