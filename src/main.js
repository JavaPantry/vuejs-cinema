import Vue from 'vue'
import './style.scss'

import MovieList from './components/MovieList.vue'
import MovieFilter from './components/MovieFilter.vue'

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
		MovieList,
		MovieFilter
		}
})