import Vue from 'vue'
import './style.scss'
new Vue({
	el: '#app',
	components: {
		'movie-list': {
			template: `<div id="movie-list"> movie list </div>`
		},
		'movie-filter': {
			template: `<div id="movie-filter">movie filter</div>`
		}
	},
	data:{}
})