import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createMetaManager } from 'vue-meta'
import store from "./store";

createApp(App)
  .use(router)
  .use(store)
  .use(createMetaManager())
  .mount('#app')
