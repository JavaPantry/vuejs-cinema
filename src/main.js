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
								<check-filter 
									v-for=" genre in genres " 
									v-bind:title="genre"
									v-on:check-filter="checkFilter"></check-filter>
							</div>
							
					   </div>`,
			methods: {
				checkFilter(){
					console.log('on checkFilter event')
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
							this.$emit('check-filter')
						}
					}
				}
			}
		}
	},
	data:{}
})