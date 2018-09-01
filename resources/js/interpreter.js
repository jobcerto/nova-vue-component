var index = {
  props: {
    template: String,
    field: Object,
  },
  render: function render(h) {
      var dynamic = {
        name: 'vue-runtime-component',
        template: this.template || "<div></div>",
        props: {field: this.field}
      };
      console.log()
      return h(dynamic, {
      	props:{field: this.field}
      });
  }
};

export default index;
