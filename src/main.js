import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const todoApp = createApp(App);
todoApp.config.globalProperties.axios = axios;
todoApp.use(router);
// const todoApp = createApp(App).use(router);
todoApp.mount("#app");
