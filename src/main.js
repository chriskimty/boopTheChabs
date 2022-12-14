// This is a Vue method (creating a Vue instance)
// in a non-Vue CLI, would look like:
    // let app = Vue.createApp({})
import { createApp } from 'vue'
import App from './App.vue'
import '../src/style.css'

// another method called mount (telling it to mount my vue app somewhere in my html)
createApp(App).mount('#app')
