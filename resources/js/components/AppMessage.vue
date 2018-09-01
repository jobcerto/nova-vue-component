<template>
 <el-button type="success" @click="submit"> {{  teste }}</el-button>
</template>
<script>
  export default {
  	props: ['field'],
    data() {
      return {
        teste: 'meu valor'
      }
    },
    methods: {
    	submit() {
    		this.teste = 'eu to testando';
    	}
    }
  }
</script>
