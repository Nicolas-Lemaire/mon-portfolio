
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/:pathMatch(.*)*', name: 'NotFoundPage', component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;