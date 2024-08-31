// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../src/assets/styles/main.css'; // Importation du CSS global

// Créez l'application Vue
const app = createApp(App);

// Utilisez le routeur
app.use(router);

// Montez l'application sur l'élément avec l'id 'app'
app.mount('#app');
