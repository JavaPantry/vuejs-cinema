import Vue from 'vue'
import './style.scss'
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
			template: `<div id="movie-filter"> 
						<h2>filter results</h2>
					   </div>`
		}
	},
	data:{}
})