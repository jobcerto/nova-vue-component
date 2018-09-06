<template>
	<v-runtime-template  :field="field"  :template="field.value"></v-runtime-template>
</template>
<script>
	import VRuntimeTemplate from "../interpreter.js";
	export default {
		props: ['field'],
		components:{VRuntimeTemplate},
	}
</script>
