import {createRouter ,createWebHashHistory} from  'vue-router'
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/', 
            redirect:'/Home',
        },
        {
            component:()=>import('../components/Home.vue'),
            path:'/Home',
            name:'Home',
        }
    ]
})
export default router;