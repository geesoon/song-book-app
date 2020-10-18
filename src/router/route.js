import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/song/:id',
        name: 'Song',
        component: () => import('../components/Song/SongBody.vue'),
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('../views/Search.vue'),
    },
    {
        path: '/subjects',
        name: 'Subjects',
        component: () => import('../components/Search/Subject.vue'),
        // children: [
        //     {
        //         path: '/subjects/list',
        //         component: () => import('../components/Search/SubjList.vue'),
        //         props: route => ({ query: route.query.subj })
        //     }
        // ]
    }, {
        path: '/alphabetical',
        name: 'Alphabetical',
        component: () => import('../components/Search/Alphabetical.vue'),
    }, {
        path: '/category',
        name: 'Category',
        component: () => import('../components/Search/Category.vue'),
    },
    {
        path: '',
        redirect: { name: 'Home' },
    },
    {
        path: '/*',
        redirect: { name: 'Home' },
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;