import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import TitleBar from './components/TitleBar.vue';
import FormRow from './components/FormRow.vue';
import HomeMainPage from './pages/HomeMainPage.vue'
import ArticleListPage from './pages/ArticleListPage.vue'
import './index.css'

const routes = [
  {path: '/', component: HomeMainPage },
  {path: '/article/list', component: ArticleListPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.component('TitleBar', TitleBar);
app.component('FormRow', FormRow);
app.use(router);
app.mount('#app');