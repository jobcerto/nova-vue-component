var index = {
	props: {
		template: String,
		field: Object,
	},
	render: function render(h) {
		console.log(this.$parent);

		console.log()
		return h({
			name: 'dinamy-component',
			template: this.template || "<div></div>",
			props: {field: {type: Object, required:true}}
		},
		{
			props: {field: this.field},
		});
	}
};

export default index;
