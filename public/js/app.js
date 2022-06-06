new Vue({
	delimiters: ['${', '}'],
	el: '#app',
	data: {
		commits: []
	},
	created: function () {
		this.listCommits();
	},
	methods: {
		listCommits: function () {
			axios.get('/github').then(rsp => {				
				this.commits = rsp.data;				
			})
		}
	}
});