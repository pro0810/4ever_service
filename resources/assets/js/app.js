import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
// fontawesome.library.add(solid, regular, brands)

Vue.use(Vuetify, {
    theme: {
        primary: "#000000",
        secondary: "#FFA000",
        accent: "#F57C00",
        error: "#f44336",
        warning: "#ffeb3b",
        info: "#2196f3",
        success: "#4caf50"
    }
})
const app = new Vue({
    el: '#root',
    components: { App },
    template: '<App></App>',
    router
})

