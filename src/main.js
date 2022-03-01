import Buefy from 'buefy'
import Vue from 'vue';

import App from './App.vue';
import router from './router';
// import store from './store';

import 'ress/ress.css';
import '@mdi/font/css/materialdesignicons.css';
import '@/assets/css/buefy.scss';
import '@/assets/css/main.less';

Vue.config.productionTip = false;

Vue.use(Buefy, {
    defaultIconPack: 'mdi',
    defaultDialogConfirmText: '确定',
    defaultDialogCancelText: '取消',
})

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app');
