Nova.booting((Vue, router) => {
    Vue.component('vue-component-wrapper', require('./components/VueComponentWrapper'));
    Vue.component('index-vue-component', require('./components/IndexField'));
    Vue.component('detail-vue-component', require('./components/DetailField'));
    Vue.component('form-vue-component', require('./components/FormField'));
    Vue.component('app-message', require('./components/AppMessage'));
    
})
