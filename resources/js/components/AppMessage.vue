<template>
	<el-button type="success" @click="submit"> {{  field.resource.id }}</el-button>
</template>
<script>
	export default {
		props: ['field'],
		created() {
			this.$notify({
			    title: 'dfasadfd',
			    message: 'super mensagem',
			    type: 'info',
			    duration: '4500',
			    position: 'top-right'
			});
		},
		data() {
			return  {
				resource: this.field.resource
			}
		},
		methods: {
			submit() {
			axios.delete('/companies/' + this.resource.id)	
			}
		}
	}
</script>
