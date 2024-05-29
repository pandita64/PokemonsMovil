import { createRouter, createWebHistory } from 'vue-router'
import PokemonsListView from '../views/PokemonsListView.vue'
import PokemonDetailView from '../views/PokemonDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PokemonsListView
  },

  {
    path: '/pokemon/:name',
    name: 'PokemonDetail',
    component: PokemonDetailView,
    props: true
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
