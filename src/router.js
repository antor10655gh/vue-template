import {
    createRouter,
    createWebHistory
} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: '',
            component: () => import('./views/HomeView.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/HomeView.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/AboutView.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/ContactView.vue')
        }
    ],
})

export default router;

