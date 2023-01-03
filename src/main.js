import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

import Icon from '@/components/common/Icon.vue'

createApp(App)
  .component('Icon', Icon)
  .use(router)
  .use(store)
  .mount('#app')
