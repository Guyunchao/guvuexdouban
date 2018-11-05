import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/views/movie-list'
import Detall from '@/views/movie-detall'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    // 配置跟路径
    {
       name:'home',
       path:'/',
       redirect:{name:'in_theaters'}
    },
    {
      name:'in_theaters',
      path:'/in_theaters',
      component:MovieList
    },
    {
      name:'coming_soon',
      path:'/coming_soon',
      component:MovieList
    },
    {
      name:'top250',
      path:'/top250',
      component:MovieList
    },
    {
      name:'search',
      path:'/search',
      component:MovieList
    },
    {
      name:'detail',
      path:'/movie/:id',
      component:Detall
    }
  ]
})
