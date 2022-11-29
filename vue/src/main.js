import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "dom-slider/dist/dom-slider.js"
import VueApexCharts from "vue3-apexcharts";
import router from './router'

createApp(App).use(router).use(VueApexCharts).mount('#app')

