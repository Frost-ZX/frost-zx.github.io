import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

import { toast } from '@/assets/js/utils';

const {
    push: routerPush,
    replace: routerReplace,
} = VueRouter.prototype;

const errorHandler = function (error) {
    console.warn(String(error));
};

VueRouter.prototype.push = function (location) {
    return routerPush.call(this, location).catch(errorHandler);
};

VueRouter.prototype.replace = function (location) {
    return routerReplace.call(this, location).catch(errorHandler);
};

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

router.onError(() => {
    toast({
        duration: 5000,
        message: '页面跳转失败，请检查网络连接情况。',
        type: 'is-danger',
    });
});

export default router;
