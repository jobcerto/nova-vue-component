<template>
	<vue-component-wrapper :field="field"></vue-component-wrapper>
</template>

<script>
	export default {
		props: ['resource', 'resourceName', 'resourceId', 'field'],
	}
</script>
