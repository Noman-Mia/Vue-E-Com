import { createRouter, createWebHistory } from 'vue-router';

// Import your page components


import ProductCom from '../components/ProductCom.vue';
import ContactCom from '../components/ContactCom.vue';


const routes = [

  { path: '/about', component: ProductCom },
  { path: '/contact', component: ContactCom },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
