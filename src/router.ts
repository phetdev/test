import { createRouter,createWebHistory } from "vue-router";
import catty from "./catty.vue";
import Catty1 from "./catty1.vue";
const routes =[
    {
        path: '/a',
        name: 'a',
        component:catty
    },
    {
        path: '/b',
        name: 'b',
        component:Catty1
    }
]
export const router = createRouter ({
    history: createWebHistory(),
    routes
})