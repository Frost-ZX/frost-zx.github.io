import AboutView from '@/views/AboutView.vue';
import ContentView from '@/views/ContentView.vue';
import HomeView from '@/views/HomeView.vue';

/** @type { import('vue-router').RouteConfig[] } */
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/content',
        name: 'ContentIndex',
        component: ContentView,
    },
    {
        path: '/content/:category/:name',
        name: 'Content',
        component: ContentView,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
        // component: () => import(
        //     /* webpackChunkName: 'about' */
        //     '@/views/About.vue'
        // ),
    },
];

export default routes;
